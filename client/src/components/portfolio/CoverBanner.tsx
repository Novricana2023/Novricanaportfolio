import { ASSETS } from "@/lib/assets";

interface CoverBannerProps {
  className?: string;
}

export default function CoverBanner({ className = "" }: CoverBannerProps) {
  return (
    <div className={`relative h-44 sm:h-52 md:h-64 lg:h-72 w-full overflow-hidden ${className}`}>
      <img
        src={ASSETS.cover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 10%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
    </div>
  );
}
