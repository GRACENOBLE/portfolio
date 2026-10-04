import { buildLlmsIndex } from "@/lib/llms";

// Prerendered at build time from the profile data
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsIndex(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
