"use client";
import React, { useEffect, useState } from "react";
import Container from "../../common/container";
import { Button, buttonVariants } from "../../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";
import MobileNavigation from "./mobile-nav";
import { handleAnchorClick } from "@/lib/scroll-utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed z-40 top-2 w-full`}>
      <Container size="xl" className="py-2 flex justify-between ">
        <div
          className={cn(
            "border-[1px] border-white/20 p-3 ps-5 pe-[13] flex justify-between items-center rounded-full w-full transition-all duration-300 backdrop-blur-lg text-white"
            // scrolled ? " " : " text-background backdrop-blur-0"
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
              onClick={(e) => handleAnchorClick(e, "/#about-me", 0)}
            >
              About me
            </Link>
            <Link
              href={"/#skill-set"}
              onClick={(e) => handleAnchorClick(e, "/#skill-set", 120)}
            >
              Skill set
            </Link>
            <Link
              href={"/#services"}
              onClick={(e) => handleAnchorClick(e, "/#services", 120)}
            >
              Services
            </Link>
            <Link
              href={"/#project-showcase"}
              onClick={(e) => handleAnchorClick(e, "/#project-showcase", 120)}
            >
              Projects
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <Link
              href={"#contact-me"}
              // onClick={(e) => handleAnchorClick(e, "#contact-me", 120)}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-full"
              )}
            >
              Let's talk
            </Link>
          </div>
          <MobileNavigation />
        </div>
      </Container>
    </div>
  );
};

// const SocialNav = () => (
//   <nav className="flex gap-1.5">
//     <Button size={"icon"} variant={"outline"} className="text-white">
//       <FaGithub />
//     </Button>
//     <Button size={"icon"} variant={"outline"} className="text-white">
//       <FaLinkedinIn />
//     </Button>
//     <Button size={"icon"} variant={"outline"} className="text-white">
//       <IoMail />
//     </Button>
//   </nav>
// );

export default Header;
