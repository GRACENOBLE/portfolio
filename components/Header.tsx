"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const socialLinks: { Icon: any; link: string }[] = [
  { Icon: <FaXTwitter />, link: "https://twitter.com/graceno75417321" },
  {
    Icon: <FiInstagram />,
    link: "https://www.instagram.com/i_am_grace_noble/",
  },
  { Icon: <FiGithub />, link: "https://github.com/GRACENOBLE" },
  {
    Icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/asiimwe-noble-5849a6255/",
  },
];

const quickLinks: { Title: string; link: string }[] = [
  { Title: "Projects", link: "/Projects" },
  { Title: "Contact", link: "/Contact" },
  { Title: "Stack", link: "/Stack" },
];

export default function Header() {
  const [isScrolled, setisScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >= 100;
      setisScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (window) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <header
      className={`z-10 fixed w-screen flex items-center ${
        isScrolled ? "h-12 transition-all ease-in-out bg-black " : "h-20"
      }`}
    >
      <Container>
        <div className={`flex md:w-[1280px] justify-between items-center `}>
          <div className="text-white text-2xl gap-8 hidden md:flex">
            {socialLinks.map(({ Icon, link }) => (
              <Link href={link} className="hover:text-red-600">
                {Icon}
              </Link>
            ))}
          </div>
          <Link href="/">
            <div
              className={`ps-4 ${
                isScrolled
                  ? "text-3xl transition-all ease-in-out"
                  : "text-5xl transition-all ease-in-out"
              }`}
            >
              <span className="text-red-600 font-black">&lt;</span>{" "}
              <span className="text-white ">DN</span>
              <span className="text-red-600 font-black"> &frasl;&gt;</span>
            </div>
          </Link>

          <div className="text-white hidden md:flex gap-8 pe-2 ">
            {quickLinks.map(({ Title, link }) => (
              <Link
                href={link}
                className={clsx("hover:text-red-600", {
                  "text-red-600": pathname === link,
                })}
              >
                <span className={pathname === link ? "" : "hidden"}>/*</span>
                {Title}
                <span className={pathname === link ? "" : "hidden"}>*/</span>
              </Link>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="block md:hidden absolute float-end text-3xl end-4 text-white outline-none">
                <FiMenu />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-6 w-52 px-4 py-10 me-2 bg-black/50">
              {quickLinks.map(({ Title, link }) => (
                <Link
                  href={link}
                  className={clsx("hover:text-red-600", {
                    "text-red-600": pathname === link,
                  })}
                >
                  <div className="border rounded-lg py-3 ps-4 bg-white">
                    <div className="text-lg bold w-full border">
                      <span className={pathname === link ? "" : "hidden"}>
                        /*
                      </span>
                      {Title}
                      <span className={pathname === link ? "" : "hidden"}>
                        */
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </header>
  );
}
