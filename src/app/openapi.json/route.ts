import { openApiSpec } from "@/lib/contact-api";

// OpenAPI description of the contact API, listed in /.well-known/api-catalog
export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(openApiSpec(), null, 2), {
    headers: { "Content-Type": "application/openapi+json; charset=utf-8" },
  });
}
