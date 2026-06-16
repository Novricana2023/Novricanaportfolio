import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import CoverBanner from "@/components/portfolio/CoverBanner";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import TechStackGrid from "@/components/portfolio/TechStackGrid";
import { LINKS, PROFILE } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";

export default function AboutPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <CoverBanner />

        <section className="container relative z-10 pb-8 -mt-14 sm:-mt-16">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-4 text-accent hover:text-accent/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-4">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[5px] border-white shadow-2xl ring-2 ring-accent/15 shrink-0">
              <img
                src={ASSETS.profile}
                alt="Novricana Viola Lungu"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left pb-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                About Me
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl">
                Tech for everyone. AI for us all.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container max-w-4xl">
            <div className="space-y-8 text-lg text-foreground/75 leading-relaxed">
              <p>{PROFILE.summary}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-blue-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">What I Build</h3>
                  <ul className="space-y-2 text-foreground/70 text-base">
                    {[
                      "Web systems: React, Node.js, ASP.NET, and REST APIs",
                      "Python AI: NLP, Streamlit, Hugging Face, health tools",
                      "Computer vision with YOLOv8 and accessibility apps",
                      "EdTech, conservation, and social-impact platforms",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent">→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-blue-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Beyond Code</h3>
                  <ul className="space-y-2 text-foreground/70 text-base">
                    {["Writer on Medium", "Inspiring tech researcher", "HealingTech Initiative founder", "Digital inclusion advocate"].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent">→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Technologies I Work With</h3>
                <TechStackGrid />
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-l-4 border-accent rounded-xl p-8">
                <p className="font-semibold text-primary mb-2">What drives me</p>
                <p className="text-foreground/70">
                  Bridging the digital gap so tech reaches everyone and AI works for us all — not just those who already have access.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Software Engineer", "AI Builder", "Writer", "Tech-for-Impact Leader", "HealingTech Founder"].map((role) => (
                  <span key={role} className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm font-medium text-primary">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Let's Connect</h2>
            <p className="text-foreground/70 mb-8">
              Always open to conversations about AI, systems, writing, and tech for social good.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => navigate("/contact")} className="bg-accent hover:bg-accent/90 text-white rounded-full">
                Get In Touch
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={LINKS.medium} target="_blank" rel="noopener noreferrer">Read on Medium</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
