export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-950 border-t border-gold-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-light text-gold-400 italic">
              Архитектура будущего
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-parchment/40 mt-1">
              Да Винчи и живая природа
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-4 justify-center mb-3">
              {/* Ornamental symbol */}
              <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="10" x2="45" y2="10" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
                <circle cx="55" cy="10" r="4" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6" />
                <circle cx="55" cy="10" r="1.5" fill="#c9a84c" opacity="0.6" />
                <line x1="65" y1="10" x2="120" y2="10" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </div>
            <p className="font-body text-xs text-parchment/40">
              © {currentYear} Архитектура Будущего. Вдохновлено Леонардо да Винчи.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-display text-sm italic text-parchment/50">
              "Простота — наивысшая утончённость"
            </p>
            <p className="font-body text-xs text-gold-500/60 mt-1">
              — Леонардо да Винчи
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
