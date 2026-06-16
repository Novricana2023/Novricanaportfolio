import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const linkClass = (href: string, mobile = false) => {
    const active = location === href;
    const base = mobile
      ? "block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors"
      : "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200";
    return active
      ? `${base} text-accent bg-accent/10`
      : `${base} text-foreground/70 hover:text-accent hover:bg-accent/5`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/60 shadow-sm">
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-primary hidden sm:inline">Novricana</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-1 border-t border-blue-50 pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClass(item.href, true)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
