import { cn } from "@/lib/utils";

// The circled monogram. icon.png only exists in white, so it's used as a mask
// over currentColor, which lets it follow the ink in both themes.
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block aspect-square bg-current", className)}
      style={{
        maskImage: "url(/images/logo/icon.png)",
        WebkitMaskImage: "url(/images/logo/icon.png)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
