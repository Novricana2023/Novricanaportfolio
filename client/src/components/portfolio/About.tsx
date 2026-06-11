/**
 * About Section Component
 * Design: Narrative-driven layout with emphasis on story and impact
 * Features: Professional biography, key themes, clear positioning
 */

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
          </div>

          {/* Main Bio */}
          <div className="space-y-8 text-lg text-foreground/75 leading-relaxed">
            <p>
              I am a Software Engineering major and Mastercard Foundation Scholar passionate about leveraging technology to solve real-world problems. My career is built on the intersection of technical excellence and social impact, where I combine software engineering expertise with a deep commitment to digital inclusion and community empowerment.
            </p>

            {/* Key Focus Areas */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Technical Focus</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Artificial Intelligence & Machine Learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Web Development & Systems Architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>AI Research & Governance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Accessibility Technology</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Impact Focus</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Responsible Innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Community Impact & Digital Inclusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Youth Empowerment & Mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Technology for Social Good</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Philosophy */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-l-4 border-accent rounded-lg p-8">
              <p className="text-lg font-semibold text-primary mb-3">
                My Philosophy
              </p>
              <p className="text-foreground/70">
                I believe technology should be accessible, inclusive, and beneficial to all communities. My work bridges the gap between technical innovation and social responsibility, ensuring that emerging technologies serve humanity's greatest needs rather than widening existing divides.
              </p>
            </div>

            {/* Roles & Identities */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">My Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Founder of HealingTech Initiative",
                  "Digital Trainer & Educator",
                  "Community Mentor",
                  "Emerging Technology Leader",
                  "Tech Writer & Communicator",
                  "Aspiring AI Researcher"
                ].map((role, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-blue-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="font-semibold text-primary">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
