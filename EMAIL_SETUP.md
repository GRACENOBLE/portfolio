# Email setup

The contact form posts to `/api/contact`, which sends the message to you through
Mailjet's SMTP relay (`in-v3.mailjet.com:587`) using nodemailer. This is the same
setup as the other Monarc projects.

## Environment variables

Set these in `.env.local` for local development, and in the Vercel project's
environment variables for preview and production:

```bash
# --- Email (Mailjet SMTP) ---
MAILJET_SMTP_USER=      # Mailjet API key
MAILJET_SMTP_PASSWORD=  # Mailjet secret key
EMAIL_FROM=             # sender, e.g. "Grace Noble <hello@yourdomain.com>"
EMAIL_TO=               # where contact form messages are delivered
```

If any of them are missing, the route logs which ones and returns
`Email service not configured`.

## Mailjet account

1. In Mailjet, open **Account settings → API keys** and copy the API key
   (`MAILJET_SMTP_USER`) and secret key (`MAILJET_SMTP_PASSWORD`).
2. Under **Senders & domains**, add and verify the domain or address you use in
   `EMAIL_FROM`. Mailjet rejects mail from unverified senders.
3. For good deliverability, add the SPF and DKIM records Mailjet shows for that
   domain.

## How a message is sent

- The form validates name, email and message (with zod) on the client and again
  on the server.
- The email body is rendered from the React Email template in
  `src/components/emails/contact-email-template.tsx`, with a plain-text version
  alongside it. If rendering fails, it falls back to the HTML template in
  `src/utils/email-template.ts`.
- `replyTo` is set to the sender, so replying to the notification goes straight
  to them.

You can preview the template at `/email-preview` while running the dev server.

## Troubleshooting

- **"Email service not configured"**: one of the four variables is unset.
  Restart the dev server after editing `.env.local`.
- **Authentication errors**: check the API key and secret key pair, and that the
  key is active in Mailjet.
- **Sent but never arrives**: check that the `EMAIL_FROM` sender is verified,
  then look in Mailjet's **Statistics** for bounces or blocks.
