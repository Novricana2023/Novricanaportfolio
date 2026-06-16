import SectionHeader from "./SectionHeader";
import { PROFILE, TECH_STACK } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/20 scroll-mt-24">
      <div className="container">
        <SectionHeader
          accent="About Me"
          title="Code That Cares. Systems That Scale."
          subtitle="Innovative full-stack systems and AI models for health, accessibility, education, and social impact. JavaScript, Python, React, Node.js, and tools built for real-world impact."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            {PROFILE.summary}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white border border-blue-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-4">What I Do</h3>
              <ul className="space-y-2.5">
                {[
                  "Full-stack apps with JavaScript, TypeScript, React, and Node.js",
                  "Python AI tools with Streamlit, Hugging Face, and ML pipelines",
                  "Computer vision (YOLOv8) and NLP models for health and accessibility",
                  "Inclusive platforms for wellness, education, and social impact",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-accent font-bold shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-blue-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-4">Who I Am</h3>
              <ul className="space-y-2.5">
                {[
                  "Digital trainer across East Africa and Malawi",
                  "Writer exploring tech, AI and digital innovation",
                  "Inspiring tech researcher pushing what's possible",
                  "Tech-for-impact leader through HealingTech",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-accent font-bold shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50/80 to-blue-50/80 border border-accent/10 rounded-2xl p-6 md:p-8">
            <p className="text-lg font-semibold text-primary mb-3">What Drives Me</p>
            <p className="text-foreground/70 leading-relaxed">
              Bridging the digital gap is why I code. Tech for everyone. AI for us all. Every innovative system I build is aimed at making sure no community gets left behind.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Technologies I Work With</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {(
                [
                  ["Languages", TECH_STACK.languages],
                  ["Web & Backend", TECH_STACK.web],
                  ["AI & ML", TECH_STACK.ai],
                  ["Deployment", TECH_STACK.platforms],
                ] as const
              ).map(([label, items]) => (
                <div
                  key={label}
                  className="bg-white border border-blue-100/80 rounded-2xl p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold text-accent mb-3">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Software Engineer",
              "Full-Stack Developer",
              "AI Model Builder",
              "Digital Trainer",
              "Writer",
              "Tech-for-Impact Leader",
              "HealingTech Founder",
            ].map((role) => (
              <span
                key={role}
                className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm font-medium text-primary hover:border-accent/30 hover:shadow-sm transition-all"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
