import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-paper text-ink">
      <Header />
      {/* The page scales up on wide screens (see --viewport-scale). The
          header zooms by the same amount, so its rules meet the guides. */}
      <div className="relative zoom-viewport">
        {/* Page guides: two construction lines down the edges of the content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mx-auto max-w-[1040px] px-4"
        >
          <div className="h-full border-x border-line" />
        </div>
        <div className="relative">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
