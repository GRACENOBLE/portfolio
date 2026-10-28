import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { z } from "zod";
import { contactSchema, RATE_LIMIT } from "@/lib/contact-api";
import ContactEmailTemplate from "@/components/emails/contact-email-template";
import { sheetContent } from "@/components/emails/blueprint";
import { createEmailHTML, createEmailText } from "@/utils/email-template";

// Mailjet's SMTP relay, as used across the Monarc projects
const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
  auth: {
    user: process.env.MAILJET_SMTP_USER,
    pass: process.env.MAILJET_SMTP_PASSWORD,
  },
});

// Best-effort rate limit. State lives in this server instance's memory, so
// it resets on cold starts and isn't shared between instances; the firm
// limit is a Cloudflare rate-limiting rule on /api/contact.
const { windowMs: WINDOW_MS, perSender: PER_SENDER, perInstance: PER_INSTANCE } =
  RATE_LIMIT;
const recent = new Map<string, number[]>();

/** Returns seconds to wait if `ip` is over the limit, otherwise records it. */
function rateLimit(ip: string): number | null {
  const now = Date.now();
  const cutoff = now - WINDOW_MS;
  let total = 0;
  for (const [key, times] of recent) {
    const live = times.filter((t) => t > cutoff);
    if (live.length) recent.set(key, live);
    else recent.delete(key);
    total += live.length;
  }
  const mine = recent.get(ip) ?? [];
  if (mine.length >= PER_SENDER || total >= PER_INSTANCE) {
    const oldest = mine[0] ?? now;
    return Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000));
  }
  recent.set(ip, [...mine, now]);
  return null;
}

/** The visitor's IP. Cloudflare sits in front of Vercel, so prefer its header. */
function clientIp(request: NextRequest): string {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    const { MAILJET_SMTP_USER, MAILJET_SMTP_PASSWORD, EMAIL_FROM, EMAIL_TO } =
      process.env;
    if (!MAILJET_SMTP_USER || !MAILJET_SMTP_PASSWORD || !EMAIL_FROM || !EMAIL_TO) {
      console.error(
        "Email is not configured: set MAILJET_SMTP_USER, MAILJET_SMTP_PASSWORD, EMAIL_FROM and EMAIL_TO"
      );
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const retryAfter = rateLimit(clientIp(request));
    if (retryAfter !== null) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in a few minutes." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      );
    }

    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, message } = validatedData;

    const submission = { name, email, message, receivedAt: new Date() };

    // Render the React Email template, falling back to the plain HTML version
    let html: string;
    try {
      html = await render(ContactEmailTemplate(submission));
    } catch (renderError) {
      console.warn("React Email failed, using HTML fallback:", renderError);
      html = createEmailHTML(submission, "notification");
    }

    // Only Grace is emailed. No receipt goes to the sender: the address is
    // unverified, so a receipt would let anyone use this API to send mail to
    // any inbox. Replying goes straight to the sender.
    const info = await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: sheetContent("notification", submission).subject,
      html,
      text: createEmailText(submission, "notification"),
    });

    return NextResponse.json(
      { message: "Email sent successfully", data: { id: info.messageId } },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
