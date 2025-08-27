import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNavigation = () => {
  return (
    <div className="h-fit lg:hidden">
      <Sheet>
        <SheetTrigger className="grid place-items-center pb-0 mb-0 mr-2 border-none outline-none">
          <IoIosMenu className="text-3xl" />
        </SheetTrigger>
        <SheetContent className="bg-muted border-none outline-none">
          <SheetHeader className="">
            <Link
              href={"/"}
              className="flex items-center gap-[9] mt-3 font-title"
            >
              <Image
                src={"/images/logo/icon.png"}
                alt={""}
                width={300}
                height={300}
                className="h-8 object-contain w-fit"
              />
              <span className="text-xl">Grace Noble</span>
            </Link>
            <SheetTitle></SheetTitle>
            <SheetDescription className="pb-4 pt-6">
              <span className="italic">
                "Software is like entropy: it is difficult to grasp, weighs
                nothing, and always tends to increase."
              </span>{" "}
              — Norman Augustine
            </SheetDescription>
            <div className="flex flex-col gap-4 mt-6">
              {[
                { href: "#about-me", label: "About me" },
                { href: "#skill-set", label: "Skill set" },
                { href: "#services", label: "Services" },
                { href: "#project-showcase", label: "Projects" },
              ].map((item) => (
                <SheetClose asChild>
                  <Link
                    className="bg-muted-foreground/40 py-4 text-center px-4 rounded-lg"
                    key={item.href}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
