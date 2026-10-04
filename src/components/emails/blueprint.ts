// Blueprint palette and type for emails, shared by the React Email template
// and the plain HTML fallback. Email clients don't support CSS variables or
// colour mixing, so the site's ink-on-paper mixes are baked in as hex values.

import { SITE } from "@/lib/site";

export const SITE_URL = SITE.url;

export const color = {
  page: "#e9e9e9", // outside the sheet
  paper: "#f4f4f4",
  ink: "#141414",
  text: "#3d3d3d", // ink at ~80%
  muted: "#6b6b6b", // ink at ~60%
  faint: "#8a8a8a", // labels
  line: "#cbcbcb", // ink at ~18%
  lineStrong: "#8a8a8a",
};

export const font = {
  mono: "'DM Mono', 'SFMono-Regular', Menlo, Consolas, 'Courier New', monospace",
  title:
    "'Funnel Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

export const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Funnel+Display:wght@600&display=swap";

// Served from the site; clients that block it fall back to plain paper
export const HATCH_URL = `${SITE_URL}/images/email/hatch.png`;

export function formatReceived(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Kampala",
    timeZoneName: "short",
  }).format(date);
}

// What goes on each sheet. Both emails share one layout and differ only in
// this content, so the React template and the HTML/text fallbacks stay in step.

export type EmailKind = "notification" | "confirmation";

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  receivedAt?: Date;
}

export interface SheetCell {
  label: string;
  value: string;
  href?: string;
}

export interface SheetContent {
  preview: string;
  subject: string;
  sheetLabel: string;
  headline: string;
  intro?: string;
  titleBlock: SheetCell[];
  messageLabel: string;
  message: string;
  button: { label: string; href: string };
  note: string;
}

export function sheetContent(
  kind: EmailKind,
  { name, email, message, receivedAt = new Date() }: ContactSubmission
): SheetContent {
  const received = formatReceived(receivedAt);
  const via = { label: "Via", value: "asiimwenoble.com", href: SITE_URL };

  if (kind === "confirmation") {
    return {
      preview: `Thanks for getting in touch, ${name}`,
      subject: "Thanks for getting in touch",
      sheetLabel: "Sheet 01 · Receipt",
      headline: `Thanks, ${name}. Message received.`,
      intro:
        "I've received your message and will get back to you as soon as I can. Here's a copy for your records.",
      titleBlock: [
        { label: "To", value: "Grace Noble" },
        { label: "From", value: email },
        { label: "Sent", value: received },
        via,
      ],
      messageLabel: "Your message",
      message,
      button: { label: "Visit asiimwenoble.com", href: SITE_URL },
      note: "Need to add something? Just reply to this email.",
    };
  }

  return {
    preview: `New message from ${name}`,
    subject: `New message from ${name}`,
    sheetLabel: "Sheet 01 · New enquiry",
    headline: `New message from ${name}`,
    titleBlock: [
      { label: "From", value: name },
      { label: "Email", value: email, href: `mailto:${email}` },
      { label: "Received", value: received },
      via,
    ],
    messageLabel: "Message",
    message,
    button: { label: `Reply to ${name}`, href: `mailto:${email}` },
    note: `Replying to this email goes straight to ${name}.`,
  };
}
