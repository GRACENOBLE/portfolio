import { buildLlmsFull } from "@/lib/llms";

// Prerendered at build time from the profile data
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
