import { apiDocs } from "@/lib/contact-api";

// Human- and agent-readable docs for the contact API
export const dynamic = "force-static";

export function GET() {
  return new Response(apiDocs(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
