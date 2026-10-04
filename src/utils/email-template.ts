import {
  color,
  font,
  FONTS_HREF,
  HATCH_URL,
  sheetContent,
  type ContactSubmission,
  type EmailKind,
  type SheetCell,
} from "@/components/emails/blueprint";

// Form input ends up in HTML, so escape it before interpolating
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const line = `1px solid ${color.line}`;
const labelStyle = `margin:0;font-family:${font.mono};font-size:10px;line-height:16px;letter-spacing:0.2em;text-transform:uppercase;color:${color.faint};`;
const valueStyle = `margin:2px 0 0;font-family:${font.mono};font-size:13px;line-height:20px;color:${color.ink};`;
const cellStyle = "padding:14px 20px;vertical-align:top;";
const linkStyle = `color:${color.ink};text-decoration:underline;`;

const cell = ({ label, value, href }: SheetCell, extra = "") => {
  const v = escapeHtml(value);
  const content = href
    ? `<a href="${escapeHtml(href)}" style="${linkStyle}">${v}</a>`
    : v;
  return `<td style="${cellStyle}${extra}"><p style="${labelStyle}">${escapeHtml(label)}</p><p style="${valueStyle}">${content}</p></td>`;
};

// Plain HTML version of the blueprint emails, used if React Email rendering
// fails. Mirrors contact-email-template.tsx.
export function createEmailHTML(
  submission: ContactSubmission,
  kind: EmailKind = "notification"
): string {
  const c = sheetContent(kind, submission);
  const [a, b, d, e] = c.titleBlock;

  const intro = c.intro
    ? `<tr><td style="border-top:${line};"><p style="margin:0;padding:24px 28px;font-family:${font.mono};font-size:14px;line-height:24px;color:${color.text};">${escapeHtml(c.intro)}</p></td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(c.subject)}</title>
<link href="${FONTS_HREF}" rel="stylesheet">
</head>
<body style="margin:0;padding:32px 12px;background-color:${color.page};font-family:${font.mono};color:${color.ink};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;margin:0 auto;background-color:${color.paper};border:1px solid ${color.lineStrong};border-collapse:collapse;">
  <tr><td style="border-bottom:${line};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="${cellStyle}border-right:${line};"><p style="margin:0;font-family:${font.title};font-size:18px;font-weight:600;color:${color.ink};">Grace Noble</p></td>
      <td style="${cellStyle}text-align:right;"><p style="${labelStyle}">Contact form</p></td>
    </tr></table>
  </td></tr>
  <tr><td style="background-color:${color.paper};background-image:url(${HATCH_URL});background-repeat:repeat;">
    <p style="${labelStyle}display:inline-block;padding:10px 20px;background-color:${color.paper};border-right:${line};border-bottom:${line};color:${color.muted};">${escapeHtml(c.sheetLabel)}</p>
    <h1 style="margin:0;padding:40px 28px 44px;font-family:${font.title};font-size:32px;line-height:36px;font-weight:600;letter-spacing:-0.01em;color:${color.ink};">${escapeHtml(c.headline)}</h1>
  </td></tr>
  ${intro}
  <tr><td style="border-top:${line};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>${cell(a, `width:50%;border-right:${line};`)}${cell(b, "width:50%;")}</tr>
      <tr>${cell(d, `border-top:${line};border-right:${line};`)}${cell(e, `border-top:${line};`)}</tr>
    </table>
  </td></tr>
  <tr><td style="border-top:${line};">
    <p style="${labelStyle}padding:10px 20px;border-bottom:${line};color:${color.muted};">${escapeHtml(c.messageLabel)}</p>
    <p style="margin:0;padding:28px;font-family:${font.mono};font-size:14px;line-height:24px;color:${color.text};white-space:pre-wrap;">${escapeHtml(c.message)}</p>
    <div style="padding:0 28px 32px;">
      <a href="${escapeHtml(c.button.href)}" style="display:inline-block;padding:14px 24px;background-color:${color.ink};color:${color.paper};font-family:${font.mono};font-size:12px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;">${escapeHtml(c.button.label)}</a>
    </div>
  </td></tr>
  <tr><td style="border-top:${line};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      ${cell({ label: "Drawn by", value: "Grace Noble" }, `border-right:${line};`)}${cell({ label: "Practice", value: "Monarc Engineering" }, `border-right:${line};`)}${cell({ label: "Location", value: "Kampala, Uganda" })}
    </tr></table>
  </td></tr>
</table>
<p style="max-width:600px;margin:16px auto 0;font-family:${font.mono};font-size:11px;line-height:16px;color:${color.faint};text-align:center;">${escapeHtml(c.note)}</p>
</body>
</html>`;
}

// Plain-text part of the emails. Written by hand rather than derived from the
// HTML, which would collapse the message's line breaks.
export function createEmailText(
  submission: ContactSubmission,
  kind: EmailKind = "notification"
): string {
  const c = sheetContent(kind, submission);
  const width = Math.max(...c.titleBlock.map((t) => t.label.length)) + 2;

  return [
    c.headline,
    "",
    ...(c.intro ? [c.intro, ""] : []),
    ...c.titleBlock.map(
      (t) =>
        `${`${t.label}:`.padEnd(width)}${t.href?.startsWith("http") ? t.href : t.value}`
    ),
    "",
    c.messageLabel,
    "-".repeat(c.messageLabel.length),
    c.message,
    "",
    c.note,
  ].join("\n");
}
