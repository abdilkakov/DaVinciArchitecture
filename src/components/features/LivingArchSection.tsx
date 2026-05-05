import { useEffect, useRef } from "react";
import livingImg from "@/assets/living-arch.jpg";

const categories = [
  {
    id: "vertical",
    label: "Вертикальные сады",
    icon: "🌿",
    title: "Вертикальные сады и зелёные стены",
    description:
      "Живые стены из растений стали архитектурным языком нашего времени. Системы модульных панелей с автоматическим поливом позволяют превратить любую поверхность здания в вертикальный сад.",
    stats: [
      { value: "30%", label: "снижение температуры фасада" },
      { value: "50%", label: "поглощение CO₂" },
      { value: "12 дБ", label: "шумоизоляция" },
    ],
    examples: ["Bosco Verticale, Милан", "One Central Park, Сидней", "CaixaForum, Мадрид"],
  },
  {
    id: "biophilic",
    label: "Биофильный дизайн",
    icon: "◉",
    title: "Биофильный дизайн",
    description:
      "Биофилия — врождённая тяга человека к природе. Архитектура, воплощающая этот принцип, снижает стресс, повышает концентрацию и создаёт ощущение гармонии через формы, свет и материалы.",
    stats: [
      { value: "15%", label: "рост производительности" },
      { value: "6%", label: "снижение абсентеизма" },
      { value: "∞", label: "эстетическая ценность" },
    ],
    examples: ["Amazon Spheres, Сиэтл", "Jewel Changi Airport", "The Edge, Амстердам"],
  },
  {
    id: "floristics",
    label: "Флористика в зданиях",
    icon: "✦",
    title: "Флористическая архитектура",
    description:
      "Интеграция цветущих растений в несущие конструкции здания — арки из лиан, колонны из живых деревьев, цветущие атриумы. Пространство становится динамичным: меняется со временами года.",
    stats: [
      { value: "40%", label: "улучшение качества воздуха" },
      { value: "25%", label: "снижение стресса у жильцов" },
      { value: "4", label: "сезона визуальных изменений" },
    ],
    examples: ["Namba Parks, Осака", "Singapore Botanic City", "Boeri Studio Projects"],
  },
];

export default function LivingArchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<string>("vertical");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeCategory = categories[0];

  return (
    <section
      id="living"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1f0e 0%, #0d2410 50%, #0a1f0e 100%)" }}
    >
      {/* Decorative green glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2d6438 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle mb-3">Раздел III</p>
          <div className="ornament-line mb-6">
            <h2 className="section-title">
              Живая{" "}
              <span className="text-gradient-gold italic">архитектура</span>
            </h2>
          </div>
          <p className="body-text max-w-2xl mx-auto">
            Флористика в зданиях, вертикальные сады и биофильный дизайн — новый язык архитектуры,
            говорящий на языке природы.
          </p>
        </div>

        {/* Hero image */}
        <div className="animate-on-scroll relative overflow-hidden rounded-sm mb-16 group">
          <img
            src={livingImg}
            alt="Живая архитектура — вертикальные сады"
            className="w-full h-72 md:h-96 object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-transparent to-forest-900/60" />
          <div className="absolute inset-0 border border-gold-500/15" />

          {/* Overlay text */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-3xl md:text-4xl font-light text-parchment italic">
              "Природа — лучший архитектор"
            </p>
            <p className="font-body text-sm text-gold-400/80 mt-2 tracking-wider">— Леонардо да Винчи</p>
          </div>
        </div>

        {/* Three categories */}
        <div className="grid lg:grid-cols-3 gap-6 animate-on-scroll">
          {categories.map((cat, i) => (
            <div key={cat.id} className="glass-card-hover p-6 relative overflow-hidden">
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-3 right-3 text-gold-500/20 text-4xl font-display font-light">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="mb-4">
                <span className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2 block">
                  {cat.label}
                </span>
                <h3 className="font-display text-xl font-medium text-parchment mb-3">
                  {cat.title}
                </h3>
                <p className="font-body text-sm text-parchment/65 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 my-4 py-4 border-t border-b border-gold-500/15">
                {cat.stats.map((stat, j) => (
                  <div key={j} className="text-center">
                    <p className="font-display text-xl font-light text-gold-400">{stat.value}</p>
                    <p className="font-body text-[10px] text-parchment/50 leading-tight mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Examples */}
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-parchment/40 mb-2">
                  Примеры
                </p>
                <ul className="space-y-1">
                  {cat.examples.map((ex, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold-500/60 flex-shrink-0" />
                      <span className="font-body text-xs text-parchment/60">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Extra image block */}
        <div className="mt-16 animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Additional image placeholder */}
            <div className="relative group overflow-hidden rounded-sm border border-gold-500/20 bg-forest-950/60" style={{ minHeight: '280px' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-500/60">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-display text-lg italic text-parchment/60">Изображение проекта</p>
                  <p className="font-body text-xs text-parchment/35 mt-1">Замените src на ссылку вашего изображения</p>
                </div>
              </div>
              {/* Uncomment and add src to display actual image:
              <img src="YOUR_IMAGE_URL" alt="Живая архитектура" className="w-full h-full object-cover" /> */}
              <div className="absolute inset-0 border border-gold-500/10 pointer-events-none" />
              <div className="renaissance-corner corner-tl" />
              <div className="renaissance-corner corner-br" />
            </div>

            {/* Video animation block */}
            <div className="relative group overflow-hidden rounded-sm border border-gold-500/20 bg-forest-950/60" style={{ minHeight: '280px' }}>
              <video
                className="w-full h-full object-cover"
                controls
                loop
                muted
                playsInline
                poster=""
                src=""
                style={{ minHeight: '280px', display: 'none' }}
              />
              {/* Placeholder overlay — скроется когда добавите src к video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500/60 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-500/60">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-display text-lg italic text-parchment/60">Анимация живой архитектуры</p>
                  <p className="font-body text-xs text-parchment/35 mt-1">Укажите src видео для воспроизведения</p>
                  <p className="font-body text-[10px] text-gold-500/40 mt-3 tracking-widest uppercase">mp4 · webm · mov</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-gold-500/10 pointer-events-none" />
              <div className="renaissance-corner corner-tl" />
              <div className="renaissance-corner corner-br" />
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-16 glass-card p-8 animate-on-scroll text-center relative">
          <div className="renaissance-corner corner-tl" />
          <div className="renaissance-corner corner-tr" />
          <div className="renaissance-corner corner-bl" />
          <div className="renaissance-corner corner-br" />

          <h3 className="font-display text-2xl md:text-3xl italic text-gold-400 mb-4">
            Биофилия — не тренд, а возврат к истокам
          </h3>
          <p className="body-text max-w-3xl mx-auto">
            Исследования показывают: доступ к природным элементам — виду на зелень, живым растениям,
            естественному свету — снижает уровень кортизола на 15–25%, улучшает когнитивные функции
            и ускоряет восстановление после болезней. То, что интуитивно понимал да Винчи, сегодня
            подтверждает нейронаука.
          </p>
        </div>
      </div>
    </section>
  );
}
