"use client";
import React, { useEffect, useState } from "react";
import Container from "../../common/container";
import { Button } from "../../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";
import MobileNavigation from "./mobile-nav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed z-20 top-2 w-full`}>
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
            <Link href={"#about-me"}>About me</Link>
            <Link href={"#skill-set"}>Skill set</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"#project-showcase"}>Projects</Link>
          </nav>
          <div className="hidden lg:flex">
            <Button
              onClick={() => toast("This will be available soon")}
              className="rounded-full"
              size={"lg"}
            >
              Let's talk
            </Button>
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
