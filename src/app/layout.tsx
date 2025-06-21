import type { Metadata } from "next";
import { Geist_Mono, Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
        className={`${workSans.variable} ${outfit.variable} antialiased bg-noble-background font-body text-white`}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
