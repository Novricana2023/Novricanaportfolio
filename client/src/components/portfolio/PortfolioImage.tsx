import { cn } from "@/lib/utils";

interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: "square" | "video" | "wide";
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[4/3]",
};

export default function PortfolioImage({
  src,
  alt,
  className,
  aspect = "wide",
}: PortfolioImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-muted/30 group",
        aspectClasses[aspect],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
