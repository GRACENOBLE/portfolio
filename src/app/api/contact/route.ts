import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ContactEmailTemplate from "@/components/emails/contact-email-template";
import { createEmailHTML } from "@/utils/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, message } = validatedData;

    // Prepare email data
    const emailData = {
      from:
        process.env.FROM_EMAIL ||
        "Portfolio Contact <noreply@asiimwenoble.com>",
      to: [process.env.CONTACT_EMAIL || "gracenoble72@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
    };

    // Try to send with React Email template first, fallback to HTML
    let emailResult;
    try {
      emailResult = await resend.emails.send({
        ...emailData,
        react: ContactEmailTemplate({ name, email, message }),
      });
    } catch (reactEmailError) {
      console.warn("React Email failed, using HTML fallback:", reactEmailError);
      emailResult = await resend.emails.send({
        ...emailData,
        html: createEmailHTML({ name, email, message }),
      });
    }

    const { data, error } = emailResult;

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
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
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
