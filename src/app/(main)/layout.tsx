import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black selection:bg-white selection:text-black">
      <Header />
      {children} <Footer />
    </div>
  );
};

export default Layout;
