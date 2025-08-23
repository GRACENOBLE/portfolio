"use client";
import React, { useEffect, useState } from "react";
import Container from "../common/container";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed z-20 top-2 w-full`}>
      <Container className="py-2 flex justify-between ">
        <div
          className={cn(
            "border-2 p-[10] px-3 flex justify-between items-center rounded-full w-full transition-all duration-300 bg-white/70 backdrop-blur-sm",
            scrolled ? " " : " text-background backdrop-blur-0"
          )}
        >
          <div className="flex items-center gap-3 font-title text-noble-dark font-bold text-4xl">
            <Image
              src={"/images/logo/icon.png"}
              alt={""}
              width={300}
              height={300}
              className="h-12 object-contain w-fit"
            />
            {/* <span>Noble</span> */}
          </div>
          <nav className="text-noble-dark font-title font-medium flex gap-8">
            <Link href={""}>About me</Link>
            <Link href={""}>My skill set</Link>
            <Link href={""}>Services</Link>
            <Link href={""}>Projects</Link>
          </nav>
          <div>
            <Button className="rounded-full font-body" size={"lg"}>
              Let's talk
            </Button>
          </div>
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
