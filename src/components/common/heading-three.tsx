import { cn } from "@/lib/utils";

const H3 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("font-title text-2xl font-semibold pb-6", className)}>
      {children}
    </h3>
  );
};

export default H3;
