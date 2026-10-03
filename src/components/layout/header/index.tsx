"use client";
import React, { useEffect, useState } from "react";
import Container from "../../common/container";
import { buttonVariants } from "../../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNavigation from "./mobile-nav";
import { handleAnchorClick } from "@/lib/scroll-utils";
import { useLenis } from "lenis/react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed z-40 top-2 w-full`}>
      <Container size="lg" className="py-2 flex justify-between ">
        <div
          className={cn(
            "border-[1px] border-white/20 p-3 ps-5 pe-[13] flex justify-between items-center rounded-full w-full transition-all duration-300 backdrop-blur-lg text-white",
            scrolled ? "bg-muted " : " "
          )}
        >
          <Link href={"/"} className="flex items-center gap-[9] font-title">
            <Image
              src={"/images/logo/icon.png"}
              alt={""}
              width={300}
              height={300}
              className="h-8 object-contain w-fit"
            />
            <span className="text-xl">Grace Noble</span>
          </Link>
          <nav className=" font-title font-medium gap-8 hidden lg:flex">
            <Link
              href={"/#about-me"}
              onClick={(e) => handleAnchorClick(e, "/#about-me", 0, lenis)}
            >
              About
            </Link>
            <Link
              href={"/#building"}
              onClick={(e) => handleAnchorClick(e, "/#building", 120, lenis)}
            >
              Building
            </Link>
            <Link
              href={"/#journey"}
              onClick={(e) => handleAnchorClick(e, "/#journey", 120, lenis)}
            >
              Journey
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <Link
              href={"/#connect"}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-full"
              )}
            >
              Connect
            </Link>
          </div>
          <MobileNavigation />
        </div>
      </Container>
    </div>
  );
};

export default Header;
