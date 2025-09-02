import type { Metadata } from "next";
import { Outfit, Funnel_Display, Oxanium, DM_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Grace Noble",
  description: "A software artist and scientist ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${dmMono.variable} antialiased bg-noble-background font-body text-white`}
      >
        <main className="">{children}</main>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
