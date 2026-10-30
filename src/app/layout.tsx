import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/site";
import { openGraphDefaults, twitterDefaults } from "@/lib/metadata";

// Self-hosted (latin subset, from Google Fonts, OFL) so dev and build never
// depend on reaching Google Fonts
const dmMono = localFont({
  variable: "--font-noble-mono",
  src: [
    { path: "./fonts/dm-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/dm-mono-500.woff2", weight: "500", style: "normal" },
  ],
});

const funnelDisplay = localFont({
  variable: "--font-noble-display",
  src: "./fonts/funnel-display.woff2",
  weight: "300 800",
});

// Site-wide defaults. Pages set their own canonical; it isn't set here
// because every page would inherit it and point back at the home page.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: { ...openGraphDefaults, type: "website" },
  twitter: twitterDefaults,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f4" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${funnelDisplay.variable} ${dmMono.variable} antialiased bg-background font-body text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <main className="">{children}</main>
          </SmoothScroll>
          <Toaster />
        </ThemeProvider>
        <GoogleAnalytics gaId={gaID} />
      </body>
    </html>
  );
}
