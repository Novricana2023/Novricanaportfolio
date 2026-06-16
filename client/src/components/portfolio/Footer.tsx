import { Github, Linkedin, Mail, BookOpen, Heart } from "lucide-react";
import { Link } from "wouter";
import { LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", hash: "#about" },
    { label: "Projects", hash: "#projects" },
    { label: "HealingTech", hash: "#healingtech" },
    { label: "Recognition", hash: "#recognition" },
    { label: "Contact", hash: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50/40 border-t border-blue-100/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="font-bold text-primary text-lg">Novricana Viola Lungu</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              Systems builder. Model trainer. Tech writer. Building AI and software that creates real impact.
            </p>
            <a
              href={LINKS.healingTech}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              <Heart className="w-4 h-4" />
              HealingTech Initiative on LinkedIn
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">
                  Full About Page →
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-primary">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Linkedin, href: LINKS.linkedin, label: "LinkedIn" },
                { icon: Github, href: LINKS.github, label: "GitHub" },
                { icon: BookOpen, href: LINKS.medium, label: "Medium" },
                { icon: Mail, href: LINKS.email, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-white border border-blue-100 rounded-xl hover:bg-accent/5 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-foreground/60">
          <p>© {currentYear} Novricana Viola Lungu. All rights reserved.</p>
          <p>Software Engineer · Writer · Tech-for-Impact Leader</p>
        </div>
      </div>
    </footer>
  );
}
