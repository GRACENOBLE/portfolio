import { buildLlmsFull } from "@/lib/llms";

// The home page as Markdown, for AI agents. The proxy serves this in place of
// the HTML when a request to / asks for text/markdown.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
