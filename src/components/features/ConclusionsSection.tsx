import { useEffect, useRef } from "react";

const conclusions = [
  {
    number: "01",
    title: "Да Винчи опередил нас на 500 лет",
    text: "Идеи Леонардо о «живых зданиях», многоуровневых городах и интеграции природы в архитектуру — не исторические артефакты, а действующий проект. Биофильный дизайн XXI века — это реализация его концепций силами современных технологий.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Природа — это не декор, а функция",
    text: "Вертикальные сады, живые фасады и внутренние атриумы с растениями — не эстетический выбор, а инженерное решение. Они регулируют температуру, качество воздуха, шум и психологическое состояние жильцов.",
    icon: "◉",
  },
  {
    number: "03",
    title: "3D-проектирование открывает ранее невозможное",
    text: "Параметрическое моделирование, климатический анализ и ИИ-алгоритмы позволяют проектировать здания, оптимальные для конкретного климата, ориентации и экосистемы. То, что задумывал да Винчи вручную, мы строим цифровыми инструментами.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Биофилия — инвестиция, а не расходы",
    text: "Исследования подтверждают: биофильные здания окупаются через снижение эксплуатационных расходов, повышение продуктивности сотрудников и рост стоимости недвижимости. Природа — лучший долгосрочный актив.",
    icon: "✦",
  },
  {
    number: "05",
    title: "Будущее — за живой архитектурой",
    text: "К 2050 году 70% населения Земли будет жить в городах. Архитектура, лишённая природы, станет психологической катастрофой. Живая архитектура — не тренд, а необходимость для городского будущего человечества.",
    icon: "◆",
  },
  {
    number: "06",
    title: "ИИ как новый Леонардо",
    text: "Искусственный интеллект в архитектуре повторяет путь да Винчи: наблюдать природу, понимать её принципы и воплощать в конструкциях. ИИ-алгоритмы сегодня проектируют биомиметические фасады и оптимизируют расположение садов — как Леонардо проектировал системы каналов.",
    icon: "◈",
  },
];

const finalQuote = {
  text: "Природа никогда не нарушает своих собственных законов. Мы можем лишь следовать им — или строить вопреки и платить цену.",
  author: "— Вдохновлено Леонардо да Винчи",
};

export default function ConclusionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="conclusions" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1f0e 0%, #030d04 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle mb-3">Раздел VIII</p>
          <div className="ornament-line mb-6">
            <h2 className="section-title">
              <span className="text-gradient-gold italic">Выводы</span>
            </h2>
          </div>
          <p className="body-text max-w-2xl mx-auto">
            Что означает проект «Архитектура будущего глазами да Винчи» для нас сегодня
            и что он предсказывает для завтра.
          </p>
        </div>

        {/* Conclusions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 animate-on-scroll">
          {conclusions.map((item, i) => (
            <div key={i} className="glass-card-hover p-6 relative overflow-hidden group">
              {/* Background number */}
              <div className="absolute top-3 right-4 font-display text-6xl font-light text-gold-500/[0.06] pointer-events-none transition-all duration-300 group-hover:text-gold-500/[0.1]">
                {item.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold-500 text-lg">{item.icon}</span>
                  <span className="font-body text-xs tracking-widest uppercase text-gold-500/60">
                    Вывод {item.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium text-parchment mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-parchment/60 leading-relaxed">{item.text}</p>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Final quote */}
        <div className="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
          <div className="section-divider mb-12" />

          <div className="relative">
            <div className="renaissance-corner corner-tl" />
            <div className="renaissance-corner corner-tr" />
            <div className="renaissance-corner corner-bl" />
            <div className="renaissance-corner corner-br" />

            <div className="p-10">
              <div className="text-gold-500/20 text-8xl font-display leading-none mb-4">"</div>
              <p className="font-display text-2xl md:text-3xl italic font-light text-parchment leading-relaxed mb-6">
                {finalQuote.text}
              </p>
              <p className="font-body text-sm text-gold-500/70 tracking-wider">{finalQuote.author}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-on-scroll">
          <div className="section-divider mb-8" />

          <p className="section-subtitle mb-4">
            Исследование завершено
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-light text-parchment mb-6">
            Архитектура начинается с вопроса:<br />
            <span className="text-gradient-gold italic">а что, если здание было бы живым?</span>
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-gold"
            >
              Начать сначала
            </button>
            <button
              onClick={() => document.querySelector("#davinci")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline-gold"
            >
              Раздел да Винчи
            </button>
          </div>

          {/* Decorative ornament */}
          <div className="mt-12">
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <line x1="0" y1="20" x2="75" y2="20" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
              <circle cx="85" cy="20" r="6" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4" />
              <circle cx="100" cy="20" r="4" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
              <circle cx="115" cy="20" r="6" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4" />
              <line x1="125" y1="20" x2="200" y2="20" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
              <circle cx="100" cy="20" r="1.5" fill="#c9a84c" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
