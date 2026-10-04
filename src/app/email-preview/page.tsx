import { render } from "@react-email/render";
import ContactEmailTemplate, {
  ConfirmationEmailTemplate,
} from "@/components/emails/contact-email-template";
import { createEmailHTML } from "@/utils/email-template";

// Demo data for previewing emails
const demoData = {
  name: "John Doe",
  email: "john.doe@example.com",
  message:
    "Hello! I'm interested in discussing a potential project with you. I love your portfolio and would like to explore how we could work together on something amazing.\n\nLooking forward to hearing from you!",
};

// Every template is rendered to HTML and shown in an iframe, so the preview
// matches what lands in an inbox rather than inheriting the site's styles
export default async function EmailPreviewPage() {
  const previews = [
    {
      title: "Notification to Grace",
      react: await render(ContactEmailTemplate(demoData)),
      fallback: createEmailHTML(demoData, "notification"),
    },
    {
      title: "Receipt to the sender",
      react: await render(ConfirmationEmailTemplate(demoData)),
      fallback: createEmailHTML(demoData, "confirmation"),
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-title text-4xl font-semibold mb-8">
          Email template preview
        </h1>

        {previews.map(({ title, react, fallback }) => (
          <section key={title} className="mb-12">
            <h2 className="font-title text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                { label: "React Email template", html: react },
                { label: "HTML fallback", html: fallback },
              ].map(({ label, html }) => (
                <div key={label}>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-3">
                    {label}
                  </h3>
                  <iframe
                    srcDoc={html}
                    className="w-full h-[900px] border border-line bg-white"
                    title={`${title}: ${label}`}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="text-sm text-ink/60">
          The React Email templates are sent by default, with the HTML fallbacks
          used if rendering fails.
        </p>
      </div>
    </div>
  );
}
