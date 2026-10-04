import type { Metadata } from "next";

// Internal tool for checking email templates; keep it out of search results
export const metadata: Metadata = {
  title: "Email preview",
  robots: { index: false, follow: false },
};

export default function EmailPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
