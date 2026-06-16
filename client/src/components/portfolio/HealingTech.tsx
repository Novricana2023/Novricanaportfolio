import { Button } from "@/components/ui/button";
import { Users, Eye, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import SectionHeader from "./SectionHeader";
import PortfolioImage from "./PortfolioImage";
import { ASSETS, CLEAR_SIGHT_GALLERY } from "@/lib/assets";
import { LINKS, HEALINGTECH } from "@/lib/constants";

export default function HealingTech() {
  return (
    <section id="healingtech" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white scroll-mt-24">
      <div className="container">
        <SectionHeader
          accent="Social Impact · Founded by Novricana"
          title={HEALINGTECH.name}
          subtitle={HEALINGTECH.founderLine}
        />

        <div className="max-w-3xl mb-10">
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-6">
            {HEALINGTECH.description}
          </p>
          <Button
            asChild
            variant="outline"
            className="border-accent/30 text-accent hover:bg-accent/5 rounded-full"
          >
            <a href={LINKS.healingTech} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Follow HealingTech on LinkedIn
            </a>
          </Button>
        </div>

        <div className="max-w-3xl mb-10 md:mb-14 bg-gradient-to-r from-orange-50/80 to-blue-50/80 border border-accent/15 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-primary mb-3">Volunteering & Community Support</h3>
          <p className="text-foreground/70 leading-relaxed mb-4">{HEALINGTECH.volunteering}</p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-full">
            <a href={LINKS.email}>Get Involved</a>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20">
          {[
            { value: "100+", label: "Youth trained in digital literacy" },
            { value: "40", label: "Children with albinism supported" },
            { value: "Ongoing", label: "Mentorship & wellness programs" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-accent/10 rounded-2xl p-6 text-center hover:shadow-lg hover:border-accent/25 transition-all"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Clear Sight Project — correct optical images only */}
        <div className="mb-14 md:mb-20">
          <div className="bg-gradient-to-br from-blue-50/80 to-orange-50/50 rounded-2xl p-6 md:p-10 border border-blue-100/80">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-2.5">
              <Eye className="w-6 h-6 text-accent shrink-0" />
              The Clear Sight Project
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed max-w-3xl">
              Supporting children with albinism through improved access to optical care, educational inclusion, and wellbeing awareness. Technology-led initiatives addressing real accessibility gaps in underserved communities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLEAR_SIGHT_GALLERY.map((img) => (
                <PortfolioImage key={img.src} src={img.src} alt={img.alt} aspect="wide" />
              ))}
            </div>
          </div>
        </div>

        {/* Children & Youth */}
        <div className="mb-14 md:mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-2.5">
            <Users className="w-6 h-6 text-accent shrink-0" />
            Children & Youth Empowerment
          </h3>
          <p className="text-foreground/70 mb-6 leading-relaxed max-w-3xl">
            Mentorship, digital literacy, STEM exposure, and leadership development for children and youth building skills for the digital age.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <PortfolioImage src={ASSETS.childrenYouth.one} alt="Youth empowerment program" aspect="wide" />
            <PortfolioImage src={ASSETS.childrenYouth.two} alt="Digital literacy session with youth" aspect="wide" />
            <PortfolioImage src={ASSETS.childrenYouth.three} alt="Community youth engagement" aspect="wide" />
          </div>
        </div>

        {/* Digital Training */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-accent shrink-0" />
            Digital Training & Workshops
          </h3>
          <p className="text-foreground/70 mb-6 leading-relaxed max-w-3xl">
            {HEALINGTECH.digitalTraining}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <PortfolioImage src={ASSETS.digitalTraining.one} alt="AI training workshop" aspect="square" />
            <PortfolioImage src={ASSETS.digitalTraining.two} alt="Digital literacy session" aspect="square" />
            <PortfolioImage src={ASSETS.digitalTraining.three} alt="Coding workshop" aspect="square" />
            <PortfolioImage src={ASSETS.digitalTraining.four} alt="Technology education event" aspect="square" />
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/leadership"
            className="text-sm font-semibold text-accent hover:text-accent/80 underline underline-offset-4"
          >
            View full leadership page →
          </Link>
        </div>
      </div>
    </section>
  );
}
