import type { Metadata } from "next";
import { Outfit, Funnel_Display, Oxanium, DM_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";

const dmMono = DM_Mono({
  variable: "--font-noble-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-noble-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Noble — Founder, Monarc Engineering",
  description:
    "Entrepreneur and engineering manager building software that solves the physical-world inefficiencies holding economies back.",
  alternates: {
    canonical: "https://asiimwenoble.com/",
  },
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
