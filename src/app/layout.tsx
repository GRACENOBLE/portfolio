import type { Metadata } from "next";
import { Outfit, Funnel_Display, Oxanium, DM_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScroll } from "@/components/smooth-scroll";

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
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${dmMono.variable} antialiased bg-noble-background font-body text-white`}
      >
        <SmoothScroll>
          <main className="">{children}</main>
        </SmoothScroll>
        <GoogleAnalytics gaId={gaID} />
        <Toaster />
      </body>
    </html>
  );
}
