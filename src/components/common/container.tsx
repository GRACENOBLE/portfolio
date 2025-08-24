import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  size = "xl",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg" | "xl";
}) => {
  return (
    <div
      className={cn(
        "mx-auto px-4 w-full",
        size === "sm" && "max-w-[1040px]",
        size === "lg" && "max-w-[1080px]",
        size === "xl" && "max-w-[1280px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
