import ContactEmailTemplate from "@/components/emails/contact-email-template";
import { createEmailHTML } from "@/utils/email-template";

// Demo data for previewing emails
const demoData = {
  name: "John Doe",
  email: "john.doe@example.com",
  message:
    "Hello! I'm interested in discussing a potential project with you. I love your portfolio and would like to explore how we could work together on something amazing.\n\nLooking forward to hearing from you!",
};

export default function EmailPreviewPage() {
  const htmlTemplate = createEmailHTML(demoData);

  return (
    <div className="min-h-screen bg-noble-background text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Email Template Preview
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* React Email Preview */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              React Email Template
            </h2>
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <ContactEmailTemplate {...demoData} />
            </div>
          </div>

          {/* HTML Fallback Preview */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              HTML Fallback Template
            </h2>
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <iframe
                srcDoc={htmlTemplate}
                className="w-full h-[600px]"
                title="HTML Email Preview"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Demo Data Used:</h3>
          <pre className="text-sm text-white/80 overflow-x-auto">
            {JSON.stringify(demoData, null, 2)}
          </pre>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/70">
            This preview shows how your contact form emails will look. The React
            Email template is used by default, with HTML fallback for
            compatibility.
          </p>
        </div>
      </div>
    </div>
  );
}
