import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-building.jpg";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const parallaxBg = sectionRef.current.querySelector(".parallax-bg") as HTMLElement;
        if (parallaxBg) {
          parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const el = document.querySelector("#davinci");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <div
        className="parallax-bg absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/50 to-forest-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/60 via-transparent to-forest-900/60" />

      {/* Ornamental corners */}
      <div className="absolute inset-8 md:inset-16 pointer-events-none">
        <div className="renaissance-corner corner-tl" />
        <div className="renaissance-corner corner-tr" />
        <div className="renaissance-corner corner-bl" />
        <div className="renaissance-corner corner-br" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="ornament-line mb-4">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-500">
            Проект
          </span>
        </div>

        {/* Author info */}
        <div className="mb-6 space-y-1">
          <p className="font-body text-sm text-parchment/70">
            <span className="text-gold-500/80">Выполнила:</span> Саматдин Мадина, студент 1 курса, ОП Экология, Гуманитарной Школы
          </p>
          <p className="font-body text-sm text-parchment/70">
            <span className="text-gold-500/80">Проверила:</span> старший преподаватель Неверова Е.Г.
          </p>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-light leading-none mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
          <span className="block text-parchment">Архитектура</span>
          <span className="block text-gradient-gold italic">будущего</span>
          <span className="block text-parchment/80 text-[0.65em] font-light mt-2">
            глазами да Винчи
          </span>
        </h1>

        <p className="font-display text-xl md:text-2xl italic text-gold-400/90 mb-4">
          Эко-здания с живой природой
        </p>

        <p className="body-text max-w-2xl mx-auto mb-10 text-parchment/70">
          Исследование пересечения ренессансных идеалов Леонардо да Винчи с современными
          технологиями биофильного проектирования — путь к архитектуре, которая дышит, растёт
          и живёт вместе с человеком.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={handleScroll} className="btn-gold">
            Исследовать проект
          </button>
          <button
            onClick={() => document.querySelector("#conclusions")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline-gold"
          >
            Перейти к выводам
          </button>
        </div>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="font-body text-xs tracking-widest uppercase text-parchment/40">
            Листать
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500/40 to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-forest-900 to-transparent" />
    </section>
  );
}
