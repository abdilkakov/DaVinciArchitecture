import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Да Винчи", href: "#davinci" },
  { label: "Живая архитектура", href: "#living" },
  { label: "3D визуализация", href: "#visualization" },
  { label: "Аватар", href: "#avatar" },
  { label: "Новости", href: "#news" },
  { label: "Чат-бот", href: "#chatbot" },
  { label: "Выводы", href: "#conclusions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-900/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
                <circle cx="16" cy="16" r="10" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
                <line x1="1" y1="16" x2="31" y2="16" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
                <line x1="16" y1="1" x2="16" y2="31" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
                <circle cx="16" cy="16" r="2" fill="#c9a84c" opacity="0.8" />
              </svg>
            </div>
            <span className="font-display text-lg font-light tracking-wider text-gold-400 group-hover:text-gold-300 transition-colors">
              Архитектура будущего
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-body text-xs tracking-widest uppercase text-parchment/60 hover:text-gold-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gold-400 hover:text-gold-300 transition-colors"
            aria-label="Меню"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-forest-900/98 backdrop-blur-md border-t border-gold-500/20">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 font-body text-sm tracking-widest uppercase text-parchment/70 hover:text-gold-400 transition-colors border-b border-gold-500/10 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
