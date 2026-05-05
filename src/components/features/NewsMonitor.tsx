import { useState, useEffect, useRef } from "react";
import { RefreshCw, ExternalLink, TrendingUp, Clock, Search } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  source: string;
  date: string;
  category: string;
  summary: string;
  relevance: number;
  trend: "up" | "neutral" | "hot";
  readTime: number;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "Bosco Verticale признан лучшим зелёным небоскрёбом десятилетия",
    source: "ArchDaily",
    date: "3 мая 2026",
    category: "Вертикальные сады",
    summary: "Миланский «Вертикальный лес» от Stefano Boeri Architetti получил международную премию как наиболее влиятельный проект биофильной архитектуры 2015–2025 годов.",
    relevance: 98,
    trend: "hot",
    readTime: 4,
  },
  {
    id: 2,
    title: "ИИ-алгоритм спроектировал самооптимизирующийся эко-фасад",
    source: "Dezeen",
    date: "1 мая 2026",
    category: "AI и архитектура",
    summary: "Нейросеть от Zaha Hadid Architects разработала параметрическую систему фасада, которая адаптирует расположение растений в реальном времени в зависимости от климатических данных.",
    relevance: 95,
    trend: "hot",
    readTime: 5,
  },
  {
    id: 3,
    title: "Исследование: жильцы биофильных зданий болеют на 37% реже",
    source: "Nature Cities",
    date: "28 апр. 2026",
    category: "Биофильный дизайн",
    summary: "Масштабное 5-летнее исследование охватило 12 000 жильцов из 8 стран и подтвердило прямую корреляцию между интеграцией природы в здание и здоровьем его обитателей.",
    relevance: 92,
    trend: "up",
    readTime: 7,
  },
  {
    id: 4,
    title: "Леонардо да Винчи как архитектор: новые находки в Codex Atlanticus",
    source: "Artnet",
    date: "25 апр. 2026",
    category: "История архитектуры",
    summary: "Итальянские исследователи расшифровали ранее неизвестные чертежи в Атлантическом кодексе — они описывают систему «живых каналов» для орошения городских садов.",
    relevance: 90,
    trend: "up",
    readTime: 6,
  },
  {
    id: 5,
    title: "Сингапур представил план: 30% площади города — вертикальная зелень к 2035",
    source: "The Guardian",
    date: "22 апр. 2026",
    category: "Урбанистика",
    summary: "Городское управление Сингапура утвердило «Зелёный план 2035»: все новые здания свыше 30 этажей обязаны иметь интегрированные эко-системы с живыми фасадами.",
    relevance: 88,
    trend: "up",
    readTime: 5,
  },
  {
    id: 6,
    title: "Биомиметические конструкции: когда архитектура копирует папоротники",
    source: "Architectural Record",
    date: "19 апр. 2026",
    category: "Биомимикрия",
    summary: "Новое поколение несущих конструкций, основанных на фрактальной геометрии папоротника, снижает расход материалов на 40% при сохранении прочности.",
    relevance: 85,
    trend: "neutral",
    readTime: 6,
  },
];

const categories = ["Все", "Вертикальные сады", "Биофильный дизайн", "AI и архитектура", "История архитектуры", "Урбанистика"];

const trendBadge = {
  hot: { label: "🔥 Горячее", color: "text-red-400 bg-red-400/10 border-red-400/20" },
  up: { label: "↑ Тренд", color: "text-gold-400 bg-gold-400/10 border-gold-500/20" },
  neutral: { label: "— Обзор", color: "text-parchment/50 bg-parchment/5 border-parchment/10" },
};

export default function NewsMonitor() {
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("2 мин. назад");
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

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated("только что");
    }, 2000);
  };

  const filteredNews = news.filter((item) => {
    const matchesCategory = activeCategory === "Все" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="news" ref={sectionRef} className="relative py-24 lg:py-32 bg-forest-900">
      <div className="absolute inset-0 bg-ornament-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="section-subtitle mb-3">Раздел VI</p>
          <div className="ornament-line mb-6">
            <h2 className="section-title">
              ИИ-мониторинг <span className="text-gradient-gold italic">новостей</span>
            </h2>
          </div>
          <p className="body-text max-w-2xl mx-auto">
            Искусственный интеллект непрерывно отслеживает публикации о биофильной архитектуре,
            вертикальных садах и эко-зданиях по всему миру.
          </p>
        </div>

        {/* Controls bar */}
        <div className="glass-card p-4 mb-6 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-body text-xs text-parchment/60">ИИ-мониторинг активен</span>
              </div>
              <div className="flex items-center gap-1 text-parchment/40">
                <Clock size={12} />
                <span className="font-body text-xs">{lastUpdated}</span>
              </div>
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-parchment/40" />
              <input
                type="text"
                placeholder="Поиск по новостям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-forest-950/60 border border-gold-500/20 text-parchment/80 placeholder:text-parchment/30 font-body text-sm pl-9 pr-4 py-2 rounded-sm focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>

            {/* Refresh */}
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 btn-outline-gold py-2 px-4 text-xs"
            >
              <RefreshCw size={13} className={isRefreshing ? "animate-spin" : ""} />
              {isRefreshing ? "Обновление..." : "Обновить"}
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6 animate-on-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs px-4 py-2 rounded-sm border transition-all duration-200 ${
                activeCategory === cat
                  ? "border-gold-500/60 bg-gold-500/10 text-gold-400"
                  : "border-gold-500/15 text-parchment/50 hover:border-gold-500/30 hover:text-parchment/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-on-scroll">
          {filteredNews.map((item) => (
            <div key={item.id} className="glass-card-hover p-5 flex flex-col gap-3">
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`font-body text-[10px] px-2 py-1 rounded-sm border ${trendBadge[item.trend].color}`}
                >
                  {trendBadge[item.trend].label}
                </span>
                <div className="flex items-center gap-1 text-parchment/30">
                  <Clock size={10} />
                  <span className="font-body text-[10px]">{item.readTime} мин</span>
                </div>
              </div>

              {/* Category tag */}
              <span className="font-body text-[10px] tracking-widest uppercase text-gold-500/70">
                {item.category}
              </span>

              {/* Title */}
              <h4 className="font-display text-base font-medium text-parchment leading-snug hover:text-gold-300 transition-colors cursor-pointer">
                {item.title}
              </h4>

              {/* Summary */}
              <p className="font-body text-xs text-parchment/55 leading-relaxed flex-1">
                {item.summary}
              </p>

              {/* Bottom row */}
              <div className="flex items-center justify-between pt-3 border-t border-gold-500/10">
                <div>
                  <p className="font-body text-xs font-medium text-parchment/60">{item.source}</p>
                  <p className="font-body text-[10px] text-parchment/35">{item.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <TrendingUp size={10} className="text-gold-500/50" />
                    <span className="font-body text-[10px] text-gold-500/70">{item.relevance}%</span>
                  </div>
                  <button className="p-1.5 rounded-sm border border-gold-500/20 hover:border-gold-500/50 transition-colors">
                    <ExternalLink size={11} className="text-parchment/50" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16 animate-on-scroll">
            <p className="font-display text-2xl italic text-parchment/30 mb-2">Новостей не найдено</p>
            <p className="font-body text-sm text-parchment/40">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Stats bar */}
        <div className="mt-8 grid grid-cols-3 gap-4 animate-on-scroll">
          {[
            { value: "1 247", label: "Источников мониторинга" },
            { value: "47", label: "Новостей за сегодня" },
            { value: "98.2%", label: "Точность классификации" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <p className="font-display text-2xl font-light text-gold-400">{stat.value}</p>
              <p className="font-body text-xs text-parchment/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
