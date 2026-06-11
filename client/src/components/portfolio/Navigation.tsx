import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";


/**
 * Navigation Component
 * Design: Clean top navigation bar with smooth transitions
 * Features: Mobile-responsive, smooth scrolling, active state tracking
 */

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    window.location.href = href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-primary hidden sm:inline">Novricana</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  location === item.href
                    ? "text-accent"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300" style={{
                  width: location === item.href ? "100%" : "0%"
                }} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
