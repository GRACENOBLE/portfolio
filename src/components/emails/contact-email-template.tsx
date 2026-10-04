import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Heading,
  Link,
  Preview,
} from "@react-email/components";
import {
  color,
  font,
  FONTS_HREF,
  HATCH_URL,
  sheetContent,
  type ContactSubmission,
  type SheetCell,
  type SheetContent,
} from "./blueprint";

// The notification Grace receives when someone uses the contact form
export default function ContactEmailTemplate(props: ContactSubmission) {
  return <BlueprintSheet content={sheetContent("notification", props)} />;
}

// The receipt sent back to the sender, with a copy of their message
export function ConfirmationEmailTemplate(props: ContactSubmission) {
  return <BlueprintSheet content={sheetContent("confirmation", props)} />;
}

// Shared layout, drawn like a sheet from the site: ruled panels, label tabs
// and a title block
function BlueprintSheet({ content: c }: { content: SheetContent }) {
  return (
    <Html lang="en">
      <Head>
        <link href={FONTS_HREF} rel="stylesheet" />
      </Head>
      <Preview>{c.preview}</Preview>
      <Body style={body}>
        <Container style={sheet}>
          {/* Header: wordmark and sheet reference */}
          <Section style={ruleBottom}>
            <Row>
              <Column style={{ ...cell, ...ruleRight }}>
                <Text style={wordmark}>Grace Noble</Text>
              </Column>
              <Column style={{ ...cell, textAlign: "right" }}>
                <Text style={label}>Contact form</Text>
              </Column>
            </Row>
          </Section>

          {/* Hatched masthead with the headline */}
          <Section style={masthead}>
            <Text style={tab}>{c.sheetLabel}</Text>
            <Heading as="h1" style={headline}>
              {c.headline}
            </Heading>
          </Section>

          {c.intro && (
            <Section style={ruleTop}>
              <Text style={introText}>{c.intro}</Text>
            </Section>
          )}

          {/* Title block: who, how and when */}
          {[c.titleBlock.slice(0, 2), c.titleBlock.slice(2)].map((row, r) => (
            <Section key={r} style={ruleTop}>
              <Row>
                {row.map((cellData, i) => (
                  <TitleCell key={cellData.label} {...cellData} first={i === 0} />
                ))}
              </Row>
            </Section>
          ))}

          {/* The message itself */}
          <Section style={ruleTop}>
            <Text style={tabRow}>{c.messageLabel}</Text>
            <Text style={messageText}>{c.message}</Text>
            <Section style={{ padding: "0 28px 32px" }}>
              <Link href={c.button.href} style={button}>
                {c.button.label}
              </Link>
            </Section>
          </Section>

          {/* Footer title block */}
          <Section style={ruleTop}>
            <Row>
              <Column style={{ ...cell, ...ruleRight }}>
                <Text style={label}>Drawn by</Text>
                <Text style={value}>Grace Noble</Text>
              </Column>
              <Column style={{ ...cell, ...ruleRight }}>
                <Text style={label}>Practice</Text>
                <Text style={value}>Monarc Engineering</Text>
              </Column>
              <Column style={cell}>
                <Text style={label}>Location</Text>
                <Text style={value}>Kampala, Uganda</Text>
              </Column>
            </Row>
          </Section>
        </Container>
        <Text style={note}>{c.note}</Text>
      </Body>
    </Html>
  );
}

const TitleCell = ({
  label: cellLabel,
  value: cellValue,
  href,
  first,
}: SheetCell & { first: boolean }) => (
  <Column style={{ ...cell, width: "50%", ...(first ? ruleRight : {}) }}>
    <Text style={label}>{cellLabel}</Text>
    {href ? (
      <Link href={href} style={{ ...value, textDecoration: "underline" }}>
        {cellValue}
      </Link>
    ) : (
      <Text style={value}>{cellValue}</Text>
    )}
  </Column>
);

const line = `1px solid ${color.line}`;

const body = {
  backgroundColor: color.page,
  margin: "0",
  padding: "32px 12px",
  fontFamily: font.mono,
  color: color.ink,
};

const sheet = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: color.paper,
  border: `1px solid ${color.lineStrong}`,
};

const ruleTop = { borderTop: line };
const ruleBottom = { borderBottom: line };
const ruleRight = { borderRight: line };

const cell = {
  padding: "14px 20px",
  verticalAlign: "top" as const,
};

const label = {
  margin: "0",
  fontFamily: font.mono,
  fontSize: "10px",
  lineHeight: "16px",
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: color.faint,
};

const value = {
  margin: "2px 0 0",
  fontFamily: font.mono,
  fontSize: "13px",
  lineHeight: "20px",
  color: color.ink,
};

const wordmark = {
  margin: "0",
  fontFamily: font.title,
  fontSize: "18px",
  fontWeight: "600",
  color: color.ink,
};

const masthead = {
  backgroundColor: color.paper,
  backgroundImage: `url(${HATCH_URL})`,
  backgroundRepeat: "repeat",
};

const tab = {
  ...label,
  display: "inline-block",
  margin: "0",
  padding: "10px 20px",
  backgroundColor: color.paper,
  borderRight: line,
  borderBottom: line,
  color: color.muted,
};

const tabRow = {
  ...label,
  margin: "0",
  padding: "10px 20px",
  borderBottom: line,
  color: color.muted,
};

const headline = {
  margin: "0",
  padding: "40px 28px 44px",
  fontFamily: font.title,
  fontSize: "32px",
  lineHeight: "36px",
  fontWeight: "600",
  letterSpacing: "-0.01em",
  color: color.ink,
};

const introText = {
  margin: "0",
  padding: "24px 28px",
  fontFamily: font.mono,
  fontSize: "14px",
  lineHeight: "24px",
  color: color.text,
};

const messageText = {
  margin: "0",
  padding: "28px 28px 28px",
  fontFamily: font.mono,
  fontSize: "14px",
  lineHeight: "24px",
  color: color.text,
  whiteSpace: "pre-wrap" as const,
};

const button = {
  display: "inline-block",
  padding: "14px 24px",
  backgroundColor: color.ink,
  color: color.paper,
  fontFamily: font.mono,
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

const note = {
  maxWidth: "600px",
  margin: "16px auto 0",
  fontFamily: font.mono,
  fontSize: "11px",
  lineHeight: "16px",
  color: color.faint,
  textAlign: "center" as const,
};
