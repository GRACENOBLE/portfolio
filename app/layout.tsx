import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Tomorrow } from "next/font/google";

const tomorrow = Tomorrow({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev.Noble",
  description: "I am a full stack  App and Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={tomorrow.className}><Header/>{children}</body>
    </html>
  );
}
