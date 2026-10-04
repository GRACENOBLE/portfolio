import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoMark } from "@/components/blueprint/logo-mark";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { handleMobileAnchorClick } from "@/lib/scroll-utils";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  // Lenis drives the wheel itself, so the sheet's scroll lock alone won't
  // stop the page moving underneath it
  useEffect(() => {
    if (isOpen) lenis?.stop();
    else lenis?.start();
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  // Closes the sheet, then scrolls once it has started animating out
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    handleMobileAnchorClick(e, href, 64, () => setIsOpen(false), lenis);
  };

  return (
    <div className="flex lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          aria-label="Open menu"
          className="grid size-10 place-items-center border border-line outline-none cursor-pointer"
        >
          <IoIosMenu className="text-2xl" />
        </SheetTrigger>
        <SheetContent className="bg-paper border-l border-line outline-none text-ink">
          <SheetHeader className="">
            <Link
              href={"/"}
              className="flex items-center gap-3 mt-3 font-title"
            >
              <LogoMark className="size-8" />
              <span className="text-xl">Grace Noble</span>
            </Link>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="pb-4 pt-6">
              <span className="italic">
                "Software is like entropy: it is difficult to grasp, weighs
                nothing, and always tends to increase."
              </span>{" "}
              (Norman Augustine)
            </SheetDescription>
            <div className="flex flex-col mt-6 border-t border-line">
              {[
                { href: "#about-me", label: "About" },
                { href: "#building", label: "Building" },
                { href: "#journey", label: "Journey" },
                { href: "#connect", label: "Connect" },
              ].map((item, idx) => (
                <Link
                  key={item.href}
                  className="flex items-center gap-4 border-b border-line bg-paper/70 px-4 py-4 text-xs uppercase tracking-[0.2em]"
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="text-ink/50">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
