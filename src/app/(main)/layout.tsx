import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SanityLive } from "@/sanity/lib/live";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-paper text-ink">
      {/* Page guides: two construction lines down the edges of the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto max-w-[1040px] px-4"
      >
        <div className="h-full border-x border-line" />
      </div>
      <SanityLive />
      <Header />
      <div className="relative">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
