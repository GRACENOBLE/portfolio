import { cn } from "@/lib/utils";
import Container from "../common/container";

// Small "+" registration mark, used where construction lines cross
export const Cross = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 11 11"
    aria-hidden="true"
    className={cn("size-[11px] text-line-strong", className)}
  >
    <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Lines that overshoot each corner of a box, the way drafted outlines do
export const CornerMarks = () => (
  <span aria-hidden="true" className="pointer-events-none absolute inset-0">
    <span className="absolute -top-px -left-4 h-px w-3 bg-line-strong" />
    <span className="absolute -top-4 -left-px h-3 w-px bg-line-strong" />
    <span className="absolute -top-px -right-4 h-px w-3 bg-line-strong" />
    <span className="absolute -top-4 -right-px h-3 w-px bg-line-strong" />
    <span className="absolute -bottom-px -left-4 h-px w-3 bg-line-strong" />
    <span className="absolute -bottom-4 -left-px h-3 w-px bg-line-strong" />
    <span className="absolute -bottom-px -right-4 h-px w-3 bg-line-strong" />
    <span className="absolute -bottom-4 -right-px h-3 w-px bg-line-strong" />
  </span>
);

// A label cell closed off by a diagonal, like the tabs on a drawing sheet
export const Tab = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex h-9 items-stretch border-b border-line", className)}>
    <span className="flex items-center pl-4 pr-3 text-[11px] uppercase tracking-[0.2em] text-ink/70">
      {children}
    </span>
    <span
      aria-hidden="true"
      className="w-6 shrink-0"
      style={{
        background:
          "linear-gradient(to top right, transparent calc(50% - 0.5px), var(--line) 50%, transparent calc(50% + 0.5px))",
      }}
    />
  </div>
);

// Section on the sheet: a full-width construction line with crosses where it
// meets the page guides, then the heading
export const Section = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={cn("relative border-t border-line", className)}>
    <Container size="sm" className="relative pt-16 md:pt-20 pb-20 md:pb-24">
      <Cross className="absolute top-0 left-4 -translate-x-1/2 -translate-y-1/2" />
      <Cross className="absolute top-0 right-4 translate-x-1/2 -translate-y-1/2" />
      <h2 className="font-title text-4xl md:text-5xl font-semibold px-6 md:px-12 pb-12 md:pb-16">
        {title}
      </h2>
      {children}
    </Container>
  </section>
);
