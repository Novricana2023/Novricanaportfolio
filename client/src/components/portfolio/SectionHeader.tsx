import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {accent && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {accent}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg text-foreground/70 max-w-2xl leading-relaxed",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full mt-6",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
