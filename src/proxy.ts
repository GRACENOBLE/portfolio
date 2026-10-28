import { NextResponse, type NextRequest } from "next/server";

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
