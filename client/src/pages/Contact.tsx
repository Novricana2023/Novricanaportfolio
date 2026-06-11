import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { Mail, Linkedin, Github, BookOpen, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Contact Page
 * Design: Professional contact page with multiple contact methods
 */

const contactMethods = [
  {
    icon: Mail,
    label: "Primary Email",
    value: "nlungu@usiu.ac.ke",
    link: "mailto:nlungu@usiu.ac.ke"
  },
  {
    icon: Mail,
    label: "Secondary Email",
    value: "novielungu@gmail.com",
    link: "mailto:novielungu@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "novricana-viola-lungu",
    link: "https://linkedin.com/in/novricana-viola-lungu-b5607212"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Novricana2023",
    link: "https://github.com/Novricana2023"
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "@novielungu",
    link: "https://medium.com/@novielungu"
  }
];

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              I'm always interested in discussing AI innovation, technology for social good, research opportunities, and collaborations that create meaningful impact.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Let's Build Technology That Creates Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:translate-y-[-4px]"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-to-br from-orange-100 to-blue-100 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                            {method.label}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-primary mb-4 break-all">
                        {method.value}
                      </p>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-accent hover:text-accent/80 font-semibold"
                      >
                        <a href={method.link} target="_blank" rel="noopener noreferrer">
                          Connect →
                        </a>
                      </Button>
                    </div>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-accent/20 rounded-xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Whether you have a project idea, research opportunity, speaking engagement, or just want to discuss technology and social impact, I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg"
                  >
                    <a href="mailto:nlungu@usiu.ac.ke">
                      Send Email
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                  >
                    <a href="https://linkedin.com/in/novricana-viola-lungu-b5607212" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 bg-white border border-blue-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary mb-4">What I'm Looking For</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>AI research and innovation opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Technology for social good collaborations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Speaking engagements on AI governance and digital inclusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Mentorship and partnership opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Consulting on AI ethics and responsible innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-foreground/70">
                I typically respond to emails within 24-48 hours. Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
