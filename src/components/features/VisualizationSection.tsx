import { useEffect, useRef, useState } from "react";
import vizImg from "@/assets/3d-visualization.jpg";
import ecoVideo from "@/assets/26.mp4";

const projects = [
  {
    id: 1,
    name: "Башня Лесной Жизни",
    type: "Жилой комплекс",
    height: "320 м",
    floors: 78,
    greenArea: "4 200 м²",
    year: "2027",
    status: "Проект",
    description:
      "72-этажная башня с вертикальным лесом из 900 деревьев и 20 000 кустарников. Каждая квартира имеет собственный биофильный балкон с персональным садом.",
    palette: ["#2d6438", "#c9a84c", "#1a3a1f"],
  },
  {
    id: 2,
    name: "Эко-кампус Ренессанс",
    type: "Офисный парк",
    height: "45 м",
    floors: 12,
    greenArea: "8 600 м²",
    year: "2026",
    status: "Строительство",
    description:
      "Кластер зданий, связанных воздушными садами-переходами. Геотермальные системы, фотовольтаика и сбор дождевой воды обеспечивают 80% энергетической самодостаточности.",
    palette: ["#3d8050", "#c9a84c", "#0a1f0e"],
  },
  {
    id: 3,
    name: "Floralis Tower",
    type: "Смешанное использование",
    height: "190 м",
    floors: 47,
    greenArea: "3 100 м²",
    year: "2029",
    status: "Концепт",
    description:
      "Здание с параметрическим фасадом, имитирующим структуру листа. Биоморфные формы максимизируют инсоляцию, а встроенные аэропонные системы выращивают продукты питания для жильцов.",
    palette: ["#224d2a", "#e8d090", "#122a17"],
  },
];

const tools = [
  { name: "Revit + Grasshopper", category: "Параметрическое проектирование", icon: "◈" },
  { name: "Rhino 3D", category: "Органические формы", icon: "◇" },
  { name: "Enscape / Lumion", category: "Фотореалистичный рендер", icon: "◉" },
  { name: "BIM 360", category: "Совместная работа", icon: "◆" },
  { name: "Ladybug Tools", category: "Климатический анализ", icon: "◈" },
  { name: "AI-генерация форм", category: "Концептуальное проектирование", icon: "✦" },
];

export default function VisualizationSection() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const project = projects[activeProject];

  return (
    <section id="visualization" ref={sectionRef} className="relative py-24 lg:py-32 bg-forest-950">
      <div className="absolute inset-0 bg-ornament-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle mb-3">Раздел IV</p>
          <div className="ornament-line mb-6">
            <h2 className="section-title">
              3D <span className="text-gradient-gold italic">визуализация</span>
            </h2>
          </div>
          <p className="body-text max-w-2xl mx-auto">
            Современное проектирование эко-зданий объединяет параметрические алгоритмы,
            климатический анализ и искусственный интеллект.
          </p>
        </div>

        {/* Hero visualization */}
        <div className="animate-on-scroll relative overflow-hidden rounded-sm mb-16 group">
          <img
            src={vizImg}
            alt="3D визуализация эко-здания"
            className="w-full h-80 md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
          <div className="absolute inset-0 border border-gold-500/15" />

          {/* Floating stats */}
          <div className="absolute top-6 right-6 glass-card p-4 text-right">
            <p className="font-body text-xs text-gold-500/70 tracking-wider uppercase mb-1">Параметры здания</p>
            <p className="font-display text-2xl font-light text-parchment">320 м</p>
            <p className="font-body text-xs text-parchment/50">Высота башни</p>
          </div>
        </div>

        {/* Projects showcase */}
        <div className="grid lg:grid-cols-3 gap-4 mb-8 animate-on-scroll">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className={`text-left p-5 rounded-sm border transition-all duration-300 ${activeProject === i
                ? "border-gold-500/60 bg-forest-700/40 shadow-gold"
                : "border-gold-500/15 bg-forest-900/40 hover:border-gold-500/30"
                }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`font-body text-xs tracking-widest uppercase ${activeProject === i ? "text-gold-400" : "text-parchment/40"
                  }`}>
                  {p.status}
                </span>
                <span className="font-display text-2xl font-light text-gold-500/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className={`font-display text-lg font-medium mb-1 ${activeProject === i ? "text-parchment" : "text-parchment/70"
                }`}>
                {p.name}
              </h3>
              <p className="font-body text-xs text-parchment/50">{p.type} · {p.year}</p>
            </button>
          ))}
        </div>

        {/* Active project detail */}
        <div className="glass-card p-8 animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-3xl font-light text-parchment mb-2">{project.name}</h3>
              <p className="font-body text-sm text-gold-400 tracking-wider mb-4">{project.type} · {project.year}</p>
              <p className="body-text mb-6">{project.description}</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Высота", value: project.height },
                  { label: "Этажи", value: project.floors },
                  { label: "Зелёная площадь", value: project.greenArea },
                  { label: "Статус", value: project.status },
                ].map((stat, i) => (
                  <div key={i} className="bg-forest-900/60 p-3 rounded-sm border border-gold-500/10">
                    <p className="font-body text-xs text-parchment/50 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="font-display text-lg font-medium text-gold-400">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Color palette visualization */}
            <div className="flex flex-col justify-center">
              <p className="font-body text-xs tracking-widest uppercase text-parchment/40 mb-4">
                Цветовая палитра проекта
              </p>
              <div className="flex gap-3 mb-6">
                {project.palette.map((color, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className="h-20 rounded-sm border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                    <p className="font-body text-xs text-parchment/40 mt-1 text-center">{color}</p>
                  </div>
                ))}
              </div>

              {/* Tools used */}
              <p className="font-body text-xs tracking-widest uppercase text-parchment/40 mb-3">
                Инструменты проектирования
              </p>
              <div className="grid grid-cols-2 gap-2">
                {tools.slice(0, 4).map((tool, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-gold-500/60 text-xs">{tool.icon}</span>
                    <span className="font-body text-xs text-parchment/60">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video block */}
        <div className="mt-12 animate-on-scroll">
          <h3 className="font-display text-xl text-gold-400 italic text-center mb-6">
            Видеоролик эко-проекта
          </h3>
          <div className="relative group overflow-hidden rounded-sm border border-gold-500/20 bg-forest-950/60" style={{ minHeight: '380px' }}>
            <video
              className="w-full h-full object-cover"
              controls
              loop
              muted
              playsInline
              src="/25.mp4"
            />
            <div className="absolute inset-0 border border-gold-500/10 pointer-events-none" />
            <div className="renaissance-corner corner-tl" />
            <div className="renaissance-corner corner-tr" />
            <div className="renaissance-corner corner-bl" />
            <div className="renaissance-corner corner-br" />
          </div>
        </div>

        {/* AI Tools Description */}
        <div className="mt-10 animate-on-scroll">
          <div className="glass-card p-6 border-l-2 border-gold-500/40">
            <h4 className="font-display text-lg italic text-gold-400 mb-4 flex items-center gap-2">
              <span className="text-gold-500/60">✦</span> Описание видео
            </h4>
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-gold-500/70 mb-1">Видео</p>
              <p className="font-body text-sm text-parchment/70 leading-relaxed">
                Создано в <span className="text-gold-400 font-medium">Lumen5</span>.
              </p>
              <p className="font-body text-xs text-parchment/50 mt-1 italic">
                Промпт: "eco architecture future, smart buildings, green facades, Leonardo da Vinci city vision, sustainable design, vertical gardens, biophilic design. Стиль: documentary, professional, calming."
              </p>
            </div>
          </div>
        </div>

        {/* Tools grid */}
        <div className="mt-12 animate-on-scroll">
          <h3 className="font-display text-xl text-gold-400 italic text-center mb-6">
            Инструменты современного эко-проектирования
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {tools.map((tool, i) => (
              <div key={i} className="glass-card-hover p-4 text-center">
                <span className="text-gold-500 text-xl block mb-2">{tool.icon}</span>
                <p className="font-body text-xs font-medium text-parchment">{tool.name}</p>
                <p className="font-body text-[10px] text-parchment/50 mt-1">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
