"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Both icons are rendered and swapped with the `dark` class, so the button is
// correct on first paint without waiting for next-themes to mount.
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "grid size-10 place-items-center border border-line text-ink transition-colors hover:bg-ink hover:text-paper cursor-pointer",
        className
      )}
    >
      <Sun className="size-4 hidden dark:block" strokeWidth={1.5} />
      <Moon className="size-4 dark:hidden" strokeWidth={1.5} />
    </button>
  );
}
