import { Lightbulb, Zap, Target } from "lucide-react";

/**
 * Research & Innovation Section Component
 * Design: Thought leadership positioning with research focus
 * Features: Leadership image, research interests, future vision
 */

export default function ResearchInnovation() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="animate-in fade-in slide-in-from-left-10 duration-700 order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-2xl blur-2xl" />
              <img
                src="/manus-storage/Researchandinnovation_ae8a076e.jpeg"
                alt="Research & Innovation"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Research & Innovation
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
            </div>

            {/* Positioning */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Aspiring AI Researcher</h3>
                  <p className="text-foreground/70">Exploring emerging technologies and their societal implications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Technology Leader</h3>
                  <p className="text-foreground/70">Driving innovation with ethical principles and inclusive design</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">AI Governance Enthusiast</h3>
                  <p className="text-foreground/70">Advocating for responsible AI and ethical technology adoption</p>
                </div>
              </div>
            </div>

            {/* Research Interests */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-primary mb-4">Research Interests</h3>
              <ul className="space-y-3 text-foreground/70">
                {[
                  "Artificial Intelligence & Machine Learning",
                  "Responsible AI & Ethical Innovation",
                  "AI Governance & Technology Policy",
                  "Emerging Technologies",
                  "Digital Innovation for Social Good",
                  "Accessibility Innovation",
                  "Human-Centered Technology Design"
                ].map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Vision */}
            <p className="text-lg text-foreground/70 leading-relaxed italic border-l-4 border-accent pl-6">
              I am committed to contributing to future AI research and innovation ecosystems that prioritize inclusion, equity, and positive societal impact. My vision is to ensure that emerging technologies serve as tools for human flourishing and community empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
