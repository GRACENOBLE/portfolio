import { NextResponse, type NextRequest } from "next/server";

// Points agents at the machine-readable resources (RFC 8288, RFC 9727 s3)
const HOME_LINKS = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</api.md>; rel="service-doc"; type="text/markdown"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</index.md>; rel="alternate"; type="text/markdown"',
].join(", ");

export function proxy(request: NextRequest) {
  // Markdown negotiation: agents that prefer text/markdown get the home page
  // as Markdown. Vary tells caches the response depends on Accept.
  if (request.nextUrl.pathname === "/") {
    const wantsMarkdown = request.headers
      .get("accept")
      ?.includes("text/markdown");
    const response = wantsMarkdown
      ? NextResponse.rewrite(new URL("/index.md", request.url))
      : NextResponse.next();
    response.headers.set("Vary", "Accept");
    response.headers.set("Link", HOME_LINKS);
    return response;
  }

  // The old project pages and the Sanity Studio were removed when the site
  // became a single page. Answering 410 Gone, rather than 404 or a redirect,
  // tells search engines the removal is deliberate so they drop the URLs.
  return new NextResponse("Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export const config = {
  matcher: ["/", "/all-projects", "/projects/:path*", "/studio/:path*"],
};
