import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import CoverBanner from "@/components/portfolio/CoverBanner";
import PortfolioImage from "@/components/portfolio/PortfolioImage";
import { Heart, Users, Eye, BookOpen, ArrowLeft, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";
import { ASSETS, CLEAR_SIGHT_GALLERY } from "@/lib/assets";
import { LINKS, HEALINGTECH } from "@/lib/constants";

export default function LeadershipPage() {
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

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[5px] border-white shadow-2xl ring-2 ring-accent/15">
                <img
                  src={ASSETS.leadership}
                  alt="Novricana — Leadership"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="text-center sm:text-left pb-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                Leadership & Community Impact
              </h1>
              <p className="text-foreground/70 max-w-xl">
                Building communities through technology, mentorship, and digital inclusion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{HEALINGTECH.name}</h2>
            <p className="text-lg font-semibold text-accent mb-6">{HEALINGTECH.tagline}</p>

            <p className="text-foreground/70 leading-relaxed max-w-3xl mb-8">
              {HEALINGTECH.description}
            </p>

            <Button asChild variant="outline" className="mb-12 border-accent/30 text-accent rounded-full">
              <a href={LINKS.healingTech} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                HealingTech on LinkedIn
              </a>
            </Button>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  What We Do
                </h3>
                <ul className="space-y-2.5 text-foreground/70">
                  {[
                    "Digital training & coding for underserved youth",
                    "Accessible technology & capacity building",
                    "Mental health & wellbeing support",
                    "Mentorship & community empowerment",
                    "The Clear Sight Project for children with albinism",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4">
                {[
                  { value: "100+", label: "Youth supported" },
                  { value: "40", label: "Children with albinism, Clear Sight" },
                  { value: "Ongoing", label: "Wellness & digital programs" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gradient-to-br from-orange-50/60 to-blue-50/60 border border-accent/10 rounded-2xl p-5"
                  >
                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-foreground/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-50/80 to-orange-50/50 rounded-2xl p-6 md:p-10 border border-blue-100">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-2">
                <Eye className="w-6 h-6 text-accent" />
                The Clear Sight Project
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed max-w-3xl">
                Supporting children with albinism through improved access to optical care, educational inclusion, and wellbeing awareness.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CLEAR_SIGHT_GALLERY.map((img) => (
                  <PortfolioImage key={img.src} src={img.src} alt={img.alt} aspect="wide" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-2">
              <Users className="w-6 h-6 text-accent" />
              Children & Youth Empowerment
            </h3>
            <p className="text-foreground/70 mb-6 max-w-3xl">
              Mentorship, digital literacy, and STEM exposure for the next generation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <PortfolioImage src={ASSETS.childrenYouth.one} alt="Youth empowerment" aspect="wide" />
              <PortfolioImage src={ASSETS.childrenYouth.two} alt="Digital literacy with youth" aspect="wide" />
              <PortfolioImage src={ASSETS.childrenYouth.three} alt="Community youth program" aspect="wide" />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              Digital Training & Workshops
            </h3>
            <p className="text-foreground/70 mb-6 max-w-3xl">
              {HEALINGTECH.digitalTraining}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <PortfolioImage src={ASSETS.digitalTraining.one} alt="AI training" aspect="square" />
              <PortfolioImage src={ASSETS.digitalTraining.two} alt="Digital literacy" aspect="square" />
              <PortfolioImage src={ASSETS.digitalTraining.three} alt="Coding workshop" aspect="square" />
              <PortfolioImage src={ASSETS.digitalTraining.four} alt="Tech education" aspect="square" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
