import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { z } from "zod";
import ContactEmailTemplate from "@/components/emails/contact-email-template";
import { createEmailHTML } from "@/utils/email-template";

// Mailjet's SMTP relay, as used across the Monarc projects
const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
  auth: {
    user: process.env.MAILJET_SMTP_USER,
    pass: process.env.MAILJET_SMTP_PASSWORD,
  },
});

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

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

    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, message } = validatedData;

    // Render the React Email template, falling back to the plain HTML one
    let html: string;
    let text: string | undefined;
    try {
      const template = ContactEmailTemplate({ name, email, message });
      html = await render(template);
      text = await render(template, { plainText: true });
    } catch (renderError) {
      console.warn("React Email failed, using HTML fallback:", renderError);
      html = createEmailHTML({ name, email, message });
    }

    const info = await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      // Replying to the notification goes straight to the sender
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html,
      text,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data: { id: info.messageId } },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
