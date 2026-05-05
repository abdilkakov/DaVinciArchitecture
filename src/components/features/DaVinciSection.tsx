import { useEffect, useRef } from "react";
import davincImg from "@/assets/davinci-sketches.jpg";

const timeline = [
  {
    year: "1485",
    title: "Концепция «Идеального города»",
    desc: "Леонардо создаёт многоуровневый проект города с разделёнными потоками людей, товаров и воды — прообраз современного вертикального зонирования.",
  },
  {
    year: "1490–1495",
    title: "Механизм биомимикрии",
    desc: "Изучение полётов птиц и строения листьев вдохновило да Винчи на создание конструкций, имитирующих природные формы — предвосхищение органической архитектуры.",
  },
  {
    year: "1497–1510",
    title: "Архитектурные трактаты",
    desc: "В своих записных книжках Леонардо описывал здания как живые организмы: с «артериями» — трубопроводами, «лёгкими» — вентиляцией, «скелетом» — несущими конструкциями.",
  },
  {
    year: "XXI век",
    title: "Наследие в современности",
    desc: "Идеи да Винчи воплощаются в Bosco Verticale, Singapore Gardens by the Bay и концептах самодостаточных биофильных небоскрёбов.",
  },
];

const principles = [
  { icon: "◈", title: "Многоуровневость", desc: "Вертикальное расслоение функций города" },
  { icon: "◇", title: "Природные потоки", desc: "Вода, воздух и свет как архитектурные элементы" },
  { icon: "◉", title: "Органические формы", desc: "Структуры, вдохновлённые анатомией природы" },
  { icon: "◈", title: "Самодостаточность", desc: "Здание как замкнутая экосистема" },
];

export default function DaVinciSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="davinci" ref={sectionRef} className="relative py-24 lg:py-32 bg-forest-900">
      {/* Background texture */}
      <div className="absolute inset-0 bg-ornament-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle mb-3">Исторический раздел</p>
          <div className="ornament-line mb-6">
            <h2 className="section-title">
              Да Винчи и{" "}
              <span className="text-gradient-gold italic">идеальный город</span>
            </h2>
          </div>
          <p className="body-text max-w-2xl mx-auto">
            Леонардо да Винчи — первый архитектор, мыслившй город как живой организм.
            Его идеи опередили время на пять столетий.
          </p>
        </div>

        {/* Main content: image + description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="animate-on-scroll relative group">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={davincImg}
                alt="Архитектурные эскизы Леонардо да Винчи"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-gold-500/20" />
            </div>
            {/* Caption */}
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-px bg-gold-500/50" />
              <p className="font-body text-xs tracking-wider text-parchment/50 italic">
                Архитектурные записи Леонардо да Винчи, ок. 1490–1510
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 animate-on-scroll">
            <blockquote className="relative pl-6 border-l-2 border-gold-500/40">
              <p className="font-display text-2xl md:text-3xl italic font-light text-parchment leading-relaxed">
                "Архитектура — это застывшая музыка природы, ожившая в камне и свете."
              </p>
              <footer className="mt-4 font-body text-sm text-gold-500/70">
                — Леонардо да Винчи
              </footer>
            </blockquote>

            <p className="body-text">
              В 1485 году, после чумы в Милане, Леонардо разработал концепцию «идеального
              города» — двухуровневого пространства, где подземный ярус служил для транспорта
              и коммуникаций, а верхний — для людей, садов и света.
            </p>
            <p className="body-text">
              Эта идея разделения функциональных потоков и интеграции природы в городскую
              структуру составляет основу современного биофильного проектирования.
            </p>

            {/* Principles grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {principles.map((p, i) => (
                <div key={i} className="glass-card p-4">
                  <span className="text-gold-500 text-lg mb-2 block">{p.icon}</span>
                  <p className="font-display text-sm font-medium text-parchment mb-1">{p.title}</p>
                  <p className="font-body text-xs text-parchment/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="animate-on-scroll">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl text-gold-400 italic">
              Хронология архитектурной мысли
            </h3>
            <div className="section-divider mt-4" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold-500 border-2 border-forest-900 -translate-x-1/2 mt-1 z-10" />

                  {/* Content */}
                  <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-card p-5">
                      <span className="font-body text-xs tracking-widest text-gold-500 uppercase">{item.year}</span>
                      <h4 className="font-display text-lg font-medium text-parchment mt-1 mb-2">{item.title}</h4>
                      <p className="font-body text-sm text-parchment/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
