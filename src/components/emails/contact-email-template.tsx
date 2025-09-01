import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmailTemplate({
  name,
  email,
  message,
}: ContactEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Heading style={title}>New Contact Form Message</Heading>
            <Text style={subtitle}>
              You have received a new message from asiimwenoble.com
            </Text>
          </Section>

          {/* Content Section */}
          <Section style={contentSection}>
            {/* Sender Info */}
            <Section style={senderSection}>
              <Heading style={sectionTitle}>Contact Information</Heading>
              <Text style={infoText}>
                <strong>Name:</strong> {name}
              </Text>
              <Text style={infoText}>
                <strong>Email:</strong> {email}
              </Text>
            </Section>

            <Hr style={divider} />

            {/* Message Section */}
            <Section style={messageSection}>
              <Heading style={sectionTitle}>Message</Heading>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          {/* Footer Section */}
          <Hr style={divider} />
          <Section style={footerSection}>
            <Text style={footerText}>
              This email was sent from your portfolio contact form.
            </Text>
            <Text style={footerText}>
              Reply directly to this email to respond to {name}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles that match your dark theme portfolio
const main = {
  backgroundColor: "#0a0a0a",
  fontFamily: "system-ui, -apple-system, sans-serif",
  color: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  backgroundColor: "#111111",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const headerSection = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const title = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 8px 0",
  lineHeight: "1.2",
};

const subtitle = {
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.7)",
  margin: "0",
  lineHeight: "1.4",
};

const contentSection = {
  backgroundColor: "rgba(255, 255, 255, 0.02)",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
};

const senderSection = {
  marginBottom: "24px",
};

const messageSection = {
  marginTop: "24px",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 16px 0",
  lineHeight: "1.3",
};

const infoText = {
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.9)",
  margin: "8px 0",
  lineHeight: "1.5",
};

const messageText = {
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.9)",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

const divider = {
  border: "none",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  margin: "24px 0",
};

const footerSection = {
  textAlign: "center" as const,
  marginTop: "24px",
};

const footerText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.5)",
  margin: "4px 0",
  lineHeight: "1.4",
};
