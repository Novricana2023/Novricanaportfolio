import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

/**
 * Footer Component
 * Design: Clean, minimal footer with social links and copyright
 * Features: Professional presentation, easy navigation
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50/30 border-t border-blue-100/50">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="font-bold text-primary text-lg">Novricana</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Building technology that creates opportunity, inclusion, and impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className="text-foreground/70 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-foreground/70 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#healingtech" className="text-foreground/70 hover:text-accent transition-colors">
                  HealingTech Initiative
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-primary">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/novricana-viola-lungu-b5607212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-blue-100 rounded-lg hover:bg-blue-50 hover:border-accent/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-primary hover:text-accent" />
              </a>
              <a
                href="https://github.com/Novricana2023"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-blue-100 rounded-lg hover:bg-blue-50 hover:border-accent/30 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary hover:text-accent" />
              </a>
              <a
                href="https://medium.com/@novielungu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-blue-100 rounded-lg hover:bg-blue-50 hover:border-accent/30 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 text-primary hover:text-accent" />
              </a>
              <a
                href="mailto:nlungu@usiu.ac.ke"
                className="p-3 bg-white border border-blue-100 rounded-lg hover:bg-blue-50 hover:border-accent/30 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-primary hover:text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>
            © {currentYear} Novricana Viola Lungu. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-accent">❤️</span> for impact
          </p>
        </div>
      </div>
    </footer>
  );
}
