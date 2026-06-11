import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section Component
 * Design: Asymmetric layout with profile image on left, content on right
 * Features: Smooth animations, clear CTAs, professional statement
 */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1 animate-in fade-in slide-in-from-right-10 duration-700">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-2xl blur-2xl" />
              <img
                src="/manus-storage/Profile.jpg_69f1eb4c.jpg"
                alt="Novricana Viola Lungu"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 md:order-2 animate-in fade-in slide-in-from-left-10 duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                NOVRICANA VIOLA LUNGU
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-accent">
                AI Developer | Software Engineer | Tech Innovator
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              I develop AI-powered and digital solutions that improve accessibility, education, healthcare awareness, and digital inclusion. My work combines software engineering, artificial intelligence, community leadership, and technology for social impact.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              As Founder of HealingTech Initiative, I am passionate about empowering underserved communities through digital literacy, mentorship, innovation, and responsible technology adoption.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center gap-2 group"
              >
                <a href="/projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                <a href="/leadership">
                  Explore Leadership
                </a>
              </Button>
            </div>

            {/* Contact CTA */}
            <div className="pt-4">
              <Button
                asChild
                variant="ghost"
                className="text-accent hover:text-accent/80 font-semibold underline hover:no-underline transition-all"
              >
                <a href="/contact">
                  Contact Me →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
