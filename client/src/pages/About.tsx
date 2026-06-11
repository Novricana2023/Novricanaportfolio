import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { ArrowLeft, Lightbulb, Zap, Target } from "lucide-react";
import { useLocation } from "wouter";

/**
 * About Page
 * Design: Comprehensive professional biography and positioning
 */

export default function AboutPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="container">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-6 text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              About Me
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              A Software Engineer and AI Developer passionate about leveraging technology to solve real-world problems
            </p>
          </div>
        </section>

        {/* Main Bio */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-4xl">
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
        </section>

        {/* Research & Innovation */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
              Research & Innovation
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Aspiring AI Researcher</h3>
                  <p className="text-foreground/70">Exploring emerging technologies and their societal implications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Technology Leader</h3>
                  <p className="text-foreground/70">Driving innovation with ethical principles and inclusive design</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">AI Governance Enthusiast</h3>
                  <p className="text-foreground/70">Advocating for responsible AI and ethical technology adoption</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-8 border border-blue-100 mt-12">
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

            <p className="text-lg text-foreground/70 leading-relaxed italic border-l-4 border-accent pl-6 mt-12">
              I am committed to contributing to future AI research and innovation ecosystems that prioritize inclusion, equity, and positive societal impact. My vision is to ensure that emerging technologies serve as tools for human flourishing and community empowerment.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              I'm always interested in discussing AI innovation, technology for social good, and collaborations that create meaningful impact.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Get In Touch
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
