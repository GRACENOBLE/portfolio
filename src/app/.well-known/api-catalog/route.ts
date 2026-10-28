import { API_DOCS_URL, CONTACT_API, OPENAPI_URL } from "@/lib/contact-api";

// RFC 9727 API catalog, so agents can discover the contact API
export const dynamic = "force-static";

const headers = {
  "Content-Type":
    'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
};

export function GET() {
  const linkset = {
    linkset: [
      {
        anchor: CONTACT_API,
        "service-desc": [
          { href: OPENAPI_URL, type: "application/openapi+json" },
        ],
        "service-doc": [{ href: API_DOCS_URL, type: "text/markdown" }],
      },
    ],
  };
  return new Response(JSON.stringify(linkset, null, 2), { headers });
}

export function HEAD() {
  return new Response(null, { headers });
}
