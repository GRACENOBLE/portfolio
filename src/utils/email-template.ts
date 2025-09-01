interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function createEmailHTML({
  name,
  email,
  message,
}: EmailTemplateProps): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Message</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #0a0a0a;
            font-family: system-ui, -apple-system, sans-serif;
            color: #ffffff;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #111111;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
        }
        .header {
            text-align: center;
            padding: 40px 20px 20px;
        }
        .title {
            font-size: 32px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 8px 0;
        }
        .subtitle {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            margin: 0;
        }
        .content {
            padding: 0 20px;
        }
        .section {
            background-color: rgba(255, 255, 255, 0.02);
            border-radius: 12px;
            padding: 24px;
            margin: 20px 0;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 16px 0;
        }
        .info-item {
            margin: 8px 0;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.9);
        }
        .message-text {
            background-color: rgba(255, 255, 255, 0.03);
            padding: 16px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            white-space: pre-wrap;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.9);
        }
        .divider {
            height: 1px;
            background-color: rgba(255, 255, 255, 0.1);
            margin: 24px 0;
            border: none;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.5);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">New Contact Form Message</h1>
            <p class="subtitle">You have received a new message from your portfolio website</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2 class="section-title">Contact Information</h2>
                <div class="info-item"><strong>Name:</strong> ${name}</div>
                <div class="info-item"><strong>Email:</strong> ${email}</div>
            </div>
            
            <hr class="divider">
            
            <div class="section">
                <h2 class="section-title">Message</h2>
                <div class="message-text">${message}</div>
            </div>
        </div>
        
        <hr class="divider">
        
        <div class="footer">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
        </div>
    </div>
</body>
</html>
  `.trim();
}
