import { NextResponse } from "next/server";

// The old project pages and the Sanity Studio were removed when the site
// became a single page. Answering 410 Gone, rather than 404 or a redirect,
// tells search engines the removal is deliberate so they drop the URLs.
export function proxy() {
  return new NextResponse("Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export const config = {
  matcher: ["/all-projects", "/projects/:path*", "/studio/:path*"],
};
