import ContactMe from "../home/contact-me";
import Container from "../common/container";
import { LogoMark } from "../blueprint/logo-mark";
import { cn } from "@/lib/utils";

// The drawing's title block, closing off the sheet
const TITLE_BLOCK = [
  { label: "Drawn by", value: "Grace Noble" },
  { label: "Practice", value: "Monarc Engineering" },
  { label: "Location", value: "Kampala, Uganda" },
  { label: "Revision", value: `${new Date().getFullYear()}` },
];

const Footer = () => {
  return (
    <>
      <ContactMe />
      <footer className="border-t border-line">
        <Container size="sm">
          <div className="grid grid-cols-2 md:grid-cols-[auto_repeat(4,1fr)] border-x border-line bg-paper">
            <div className="col-span-2 md:col-span-1 flex items-center px-5 py-5 border-b md:border-b-0 md:border-r border-line">
              <LogoMark className="size-9" />
            </div>
            {TITLE_BLOCK.map((cell, idx) => (
              <div
                key={cell.label}
                className={cn(
                  "px-5 py-4 border-line",
                  idx % 2 === 1 && "border-l",
                  idx >= 2 && "border-t md:border-t-0",
                  idx === 2 && "md:border-l"
                )}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  {cell.label}
                </p>
                <p className="text-xs pt-1">{cell.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
