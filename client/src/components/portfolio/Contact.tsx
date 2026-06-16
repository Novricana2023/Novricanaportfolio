import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, BookOpen, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { LINKS } from "@/lib/constants";

const contactMethods = [
  { icon: Mail, label: "Email", value: "nlungu@usiu.ac.ke", link: LINKS.email },
  { icon: Phone, label: "Phone", value: "+254 790 355 947", link: LINKS.phone },
  { icon: Linkedin, label: "LinkedIn", value: "novricana-viola-lungu", link: LINKS.linkedin },
  { icon: Github, label: "GitHub", value: "Novricana2023", link: LINKS.github },
  { icon: BookOpen, label: "Medium", value: "@novielungu", link: LINKS.medium },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white scroll-mt-24">
      <div className="container max-w-4xl">
        <SectionHeader
          accent="Connect"
          title="Let's Build Something Impactful"
          subtitle="Open to AI research collaborations, tech-for-good partnerships, speaking engagements, and mentorship opportunities."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10">
          {contactMethods.map(({ icon: Icon, label, value, link }) => (
            <a
              key={label}
              href={link}
              target={link.startsWith("mailto") || link.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white border border-blue-100/80 rounded-2xl p-5 hover:shadow-lg hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl group-hover:from-accent/10 group-hover:to-blue-100 transition-colors">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{label}</p>
                <p className="font-semibold text-primary truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-white border border-accent/10 rounded-2xl p-6 md:p-10 text-center shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-3">Ready to Collaborate?</h3>
          <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
            Whether it's an AI project, research opportunity, or social impact initiative — I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-full">
              <a href={LINKS.email}>Send Email</a>
            </Button>
            <Button asChild variant="outline" className="border-primary/20 rounded-full">
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
