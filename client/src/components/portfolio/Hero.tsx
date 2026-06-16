import { Button } from "@/components/ui/button";
import { ArrowRight, PenLine, Code2, Brain, GraduationCap } from "lucide-react";
import CoverBanner from "./CoverBanner";
import { ASSETS } from "@/lib/assets";
import { LINKS, PROFILE, HERO_SKILL_BADGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white scroll-mt-24">
      <CoverBanner />

      <div className="container relative z-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start -mt-16 sm:-mt-20 md:-mt-24">
          <div className="flex justify-center lg:justify-start">
            <div className="relative shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/25 via-blue-400/15 to-accent/10 rounded-full blur-md" />
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[5px] border-white shadow-2xl ring-2 ring-accent/15">
                <img
                  src={ASSETS.profile}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 text-center lg:text-left lg:pt-8">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent">
                {PROFILE.role}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight">
                {PROFILE.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {PROFILE.title}
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {HERO_SKILL_BADGES.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-medium text-primary"
                >
                  {label.startsWith("AI") ? (
                    <Brain className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <Code2 className="w-3.5 h-3.5 text-accent" />
                  )}
                  {label}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-medium text-primary">
                <GraduationCap className="w-3.5 h-3.5 text-accent" />
                Digital Trainer
              </span>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-medium text-primary hover:border-accent/30 hover:bg-accent/5 transition-colors"
              >
                GitHub
              </a>
              <a
                href={LINKS.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-medium text-primary hover:border-accent/30 hover:bg-accent/5 transition-colors"
              >
                <PenLine className="w-3.5 h-3.5 text-accent" />
                Writer · Medium
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all group"
              >
                <a href="#projects">
                  See What I've Built
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-primary/20 text-primary hover:bg-primary/5 font-semibold py-3 px-6 rounded-full"
              >
                <a href={LINKS.medium} target="_blank" rel="noopener noreferrer">
                  Read My Writing
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-accent hover:text-accent/80 font-semibold"
              >
                <a href="#contact">Let's Connect →</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
