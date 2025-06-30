"use client"
import React, { useEffect, useState } from "react";
import Container from "../common/container";
import Logo from "../logo";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Button } from "../ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-20 border-b border-b-muted/20 top-0 w-full transition-all ${
        scrolled
          ? " border-px border-b-muted/20 bg-black/40 backdrop-blur-md"
          : "bg-transparent border-none backdrop-blur-0"
      }`}
    >
      <Container className="py-2 flex justify-between">
        <Logo variant="logo" color="white" size="sm" />
        <SocialNav />
      </Container>
    </div>
  );
};

const SocialNav = () => (
  <nav className="flex gap-1.5">
    <Button size={"icon"} variant={"outline"} className="text-white">
      <FaGithub />
    </Button>
    <Button size={"icon"} variant={"outline"} className="text-white">
      <FaLinkedinIn />
    </Button>
    <Button size={"icon"} variant={"outline"} className="text-white">
      <IoMail />
    </Button>
  </nav>
);

export default Header;
