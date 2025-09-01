# Email Setup Guide

This guide will help you configure the contact form email functionality for your portfolio.

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com)
2. **Domain**: You'll need a domain to send emails from (optional for testing)

## Setup Steps

### 1. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign up/login
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
CONTACT_EMAIL=your-email@example.com
FROM_EMAIL=noreply@yourdomain.com
```

**Important Notes:**

- Replace `your-email@example.com` with your actual email address
- Replace `yourdomain.com` with your actual domain
- For testing, you can use the default Resend domain: `onboarding@resend.dev`

### 3. Domain Setup (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. Go to your Resend dashboard
2. Navigate to "Domains"
3. Add your domain
4. Follow the DNS setup instructions
5. Once verified, update `FROM_EMAIL` to use your domain

### 4. Testing the Setup

1. Start your development server: `pnpm dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email for the message

## Features

### ✅ What's Included

- **Beautiful Email Templates**: Dark-themed emails that match your portfolio design
- **Validation**: Comprehensive form validation with Zod
- **Toast Notifications**: User-friendly success/error messages
- **Fallback System**: HTML email fallback if React Email fails
- **Type Safety**: Full TypeScript support
- **Error Handling**: Comprehensive error handling and logging
- **Environment Configuration**: Flexible environment-based configuration

### 📧 Email Template Features

- **Responsive Design**: Looks great on all email clients
- **Dark Theme**: Matches your portfolio's aesthetic
- **Professional Layout**: Clean, modern design
- **Sender Information**: Clear display of contact details
- **Reply-To Setup**: Easy to respond directly to the sender

### 🔧 Technical Details

- **API Route**: `/api/contact` handles form submissions
- **React Email**: Beautiful email templates with React components
- **HTML Fallback**: Pure HTML template for maximum compatibility
- **Rate Limiting**: Built-in protection against spam (via Resend)
- **Validation**: Server-side validation with Zod schemas

## Troubleshooting

### Common Issues

1. **"Email service not configured" error**

   - Check that `RESEND_API_KEY` is set in your `.env.local` file
   - Restart your development server after adding environment variables

2. **Emails not being received**

   - Check your spam folder
   - Verify your email address in `CONTACT_EMAIL`
   - Check Resend dashboard for delivery status

3. **"Failed to send email" error**
   - Verify your API key is correct
   - Check the Resend dashboard for error details
   - Ensure your domain is properly configured (if using custom domain)

### Development vs Production

**Development:**

- Use `onboarding@resend.dev` as your `FROM_EMAIL`
- Emails may be limited but will work for testing

**Production:**

- Set up and verify your own domain
- Use your domain for `FROM_EMAIL`
- Monitor email delivery in Resend dashboard

## Customization

### Updating Email Templates

1. **React Email Template**: Edit `src/components/emails/contact-email-template.tsx`
2. **HTML Fallback**: Edit `src/utils/email-template.ts`

### Styling

The email templates use inline styles that match your portfolio's dark theme:

- Background: `#0a0a0a`
- Container: `#111111`
- Text: `#ffffff` with various opacity levels
- Borders: `rgba(255, 255, 255, 0.1)`

### Adding More Fields

To add more form fields:

1. Update the schema in `src/app/api/contact/route.ts`
2. Update the form in `src/components/home/contact-me.tsx`
3. Update both email templates to include the new fields

## Security Considerations

- Form validation on both client and server
- Rate limiting through Resend
- No sensitive data stored
- Environment variables for configuration
- Server-side email sending (secure)

## Cost Considerations

Resend offers:

- **Free tier**: 3,000 emails/month
- **Pro tier**: Starting at $20/month for 50,000 emails
- No setup fees or hidden costs

For a portfolio contact form, the free tier is usually sufficient.
