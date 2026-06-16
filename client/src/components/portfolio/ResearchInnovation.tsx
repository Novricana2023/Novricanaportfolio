import { Lightbulb, Zap, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";
import PortfolioImage from "./PortfolioImage";
import { ASSETS } from "@/lib/assets";

export default function ResearchInnovation() {
  return (
    <section id="research" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/20 to-white scroll-mt-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <PortfolioImage
            src={ASSETS.research}
            alt="Research and innovation"
            aspect="wide"
            className="max-w-lg mx-auto lg:mx-0 shadow-xl"
          />

          <div className="space-y-8">
            <SectionHeader
              accent="Future Focus"
              title="Research & Innovation"
              subtitle="Exploring how emerging technologies can serve humanity — with ethics, inclusion, and impact at the center."
            />

            <div className="space-y-5">
              {[
                {
                  icon: Lightbulb,
                  title: "Aspiring Tech Researcher",
                  desc: "Exploring AI, accessibility tech, and their societal implications",
                },
                {
                  icon: Zap,
                  title: "Technology Leader",
                  desc: "Driving innovation with ethical principles and inclusive design",
                },
                {
                  icon: Target,
                  title: "AI Governance Advocate",
                  desc: "Championing responsible AI adoption and technology policy",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{title}</h3>
                    <p className="text-sm text-foreground/70">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-3">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI & Machine Learning",
                  "Responsible AI",
                  "Accessibility Innovation",
                  "Digital Inclusion",
                  "Human-Centered Design",
                  "Tech Policy",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-blue-50 text-primary text-sm rounded-full font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
