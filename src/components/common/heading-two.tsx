import { cn } from "@/lib/utils";

const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={cn("font-title text-4xl font-semibold pb-6", className)}>
      {children}
    </h2>
  );
};

export default H2;
