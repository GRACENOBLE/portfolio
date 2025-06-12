import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  size,
  variant,
  color,
}: {
  size?: "sm" | "md" | "lg";
  variant?: "logo" | "logomark" | "wordmark";
  color?: "white" | "black" | "yellow";
}) => {
  return (
    <Link href={"/"} aria-label="go home" className="flex items-center gap-2">
      {!(variant == "wordmark") && (
        <Image
          src={
            color === "white"
              ? "/images/logo-white.svg"
              : color === "black"
              ? "/images/logo-black.svg"
              : "/images/logo-yellow.svg"
          }
          alt={""}
          width={500}
          height={500}
          className={cn("h-12 w-12 object-cover rounded-md", {
            "h-8 w-8": size == "sm",
            "h-12 w-12": size == "md",
            "h-16 w-16": size == "lg",
          })}
        />
      )}
      {!(variant == "logo") && (
        <span className="text-3xl font-semibold font-body">Better</span>
      )}
    </Link>
  );
};

export default Logo;
