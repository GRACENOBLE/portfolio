import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { z } from "zod";
import ContactEmailTemplate, {
  ConfirmationEmailTemplate,
} from "@/components/emails/contact-email-template";
import { sheetContent, type EmailKind } from "@/components/emails/blueprint";
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

    const submission = { name, email, message, receivedAt: new Date() };

    // Render a React Email template, falling back to the plain HTML version
    const renderEmail = async (kind: EmailKind) => {
      const Template =
        kind === "notification" ? ContactEmailTemplate : ConfirmationEmailTemplate;
      try {
        return await render(Template(submission));
      } catch (renderError) {
        console.warn(`React Email failed (${kind}), using HTML fallback:`, renderError);
        return createEmailHTML(submission, kind);
      }
    };

    const [notification, confirmation] = await Promise.allSettled([
      // To Grace. Replying goes straight to the sender
      transporter.sendMail({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: email,
        subject: sheetContent("notification", submission).subject,
        html: await renderEmail("notification"),
        text: createEmailText(submission, "notification"),
      }),
      // Receipt to the sender with a copy of their message. Replying reaches
      // Grace rather than the sending address
      transporter.sendMail({
        from: EMAIL_FROM,
        to: email,
        replyTo: EMAIL_TO,
        subject: sheetContent("confirmation", submission).subject,
        html: await renderEmail("confirmation"),
        text: createEmailText(submission, "confirmation"),
      }),
    ]);

    // The receipt is a courtesy, so only a failed notification fails the request
    if (confirmation.status === "rejected") {
      console.error("Confirmation email failed:", confirmation.reason);
    }
    if (notification.status === "rejected") {
      throw notification.reason;
    }
    const info = notification.value;

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
