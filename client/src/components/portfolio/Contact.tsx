import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";

/**
 * Contact Section Component
 * Design: Professional contact cards with social links
 * Features: Multiple contact methods, premium presentation
 */

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nlungu@usiu.ac.ke",
    link: "mailto:nlungu@usiu.ac.ke"
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

export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's Connect
            </h2>
            <p className="text-xl font-semibold text-accent mb-4">
              Let's Build Technology That Creates Impact
            </p>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              I'm always interested in discussing AI innovation, technology for social good, research opportunities, and collaborations that create meaningful impact.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "both"
                  }}
                >
                  <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:translate-y-[-4px]">
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
                </div>
              );
            })}
          </div>

          {/* Contact Form CTA */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-accent/20 rounded-xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Have a Project or Opportunity?
            </h3>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              I'm open to collaborations, speaking engagements, research partnerships, and opportunities to create technology that drives positive social change. Feel free to reach out through any of the channels above.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <a href="mailto:nlungu@usiu.ac.ke">
                Send Me an Email
              </a>
            </Button>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-sm text-foreground/50">
            <p>
              Looking forward to connecting with you and exploring opportunities to create meaningful impact together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
