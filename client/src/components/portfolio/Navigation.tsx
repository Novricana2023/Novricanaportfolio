import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Home", href: "/", hash: "#home" },
  { label: "About", href: "/about", hash: "#about" },
  { label: "Projects", href: "/projects", hash: "#projects" },
  { label: "Leadership", href: "/leadership", hash: "#healingtech" },
  { label: "Contact", href: "/contact", hash: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (item: (typeof navItems)[0]) => {
    setIsOpen(false);
    if (isHome && item.hash) {
      const el = document.querySelector(item.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
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
            {navItems.map((item) =>
              isHome ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent rounded-full hover:bg-accent/5 transition-all duration-200"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    location === item.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
            {navItems.map((item) =>
              isHome ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
