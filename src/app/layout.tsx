import type { Metadata } from "next";
import { Outfit, Funnel_Display,Oxanium, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
  description: "A guy who builds software",
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
      </body>
    </html>
  );
}
