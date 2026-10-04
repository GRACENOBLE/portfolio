"use client";
import React from "react";
import Container from "../../common/container";
import { buttonVariants } from "../../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNavigation from "./mobile-nav";
import { handleAnchorClick } from "@/lib/scroll-utils";
import { useLenis } from "lenis/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogoMark } from "@/components/blueprint/logo-mark";

export const NAV_ITEMS = [
  { href: "/#about-me", label: "About", offset: 64 },
  { href: "/#building", label: "Building", offset: 64 },
  { href: "/#journey", label: "Journey", offset: 64 },
];

const Header = () => {
  const lenis = useLenis();

  return (
    <header className="fixed z-40 top-0 w-full border-b border-line bg-paper/85 backdrop-blur-md">
      <Container size="sm">
        <div className="flex h-16 items-stretch justify-between border-x border-line">
          <Link
            href={"/"}
            className="flex items-center gap-3 px-4 font-title border-r border-line"
          >
            <LogoMark className="size-8" />
            <span className="text-lg">Grace Noble</span>
          </Link>
          <nav className="hidden lg:flex items-stretch ml-auto">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href, item.offset, lenis)}
                className="flex items-center px-6 border-l border-line text-[11px] uppercase tracking-[0.2em] text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 px-3 border-l border-line">
            <ThemeToggle />
            <Link
              href={"/#connect"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "hidden lg:inline-flex"
              )}
            >
              Connect
            </Link>
            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
