import { useEffect, useRef } from "react";
import avatarImg from "@/assets/avatar.jpg";

const skills = [
  { name: "Архитектурный дизайн", level: 92 },
  { name: "Биофильное проектирование", level: 88 },
  { name: "3D визуализация", level: 85 },
  { name: "История искусств", level: 90 },
  { name: "Экоустойчивость", level: 86 },
];

const interests = [
  "Ренессансная архитектура",
  "Вертикальные сады",
  "Параметрический дизайн",
  "Биомимикрия",
  "Философия природы",
  "Урбанистика будущего",
];

export default function AvatarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Animate skill bars when section is visible
            if (!animatedRef.current && barsRef.current) {
              animatedRef.current = true;
              const bars = barsRef.current.querySelectorAll(".skill-bar-fill");
              bars.forEach((bar, i) => {
                const el = bar as HTMLElement;
                const targetWidth = el.dataset.width || "0";
                setTimeout(() => {
                  el.style.width = targetWidth + "%";
                }, i * 150 + 300);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="avatar"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1f0e 0%, #122a17 100%)" }}
    >
      {/* Decorative radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle mb-3">Раздел V</p>
          <div className="ornament-line mb-6">
            <h2 className="section-title">
              Мой <span className="text-gradient-gold italic">аватар</span>
            </h2>
          </div>
          <p className="body-text max-w-xl mx-auto">
            Автор проекта — исследователь на пересечении классики и современности,
            вдохновлённый вечным диалогом природы и архитектуры.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Avatar image column */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="relative inline-block w-full max-w-sm mx-auto">
              {/* Ornamental frame */}
              <div className="absolute -inset-4">
                <div className="absolute inset-0 border border-gold-500/20 rounded-sm" />
                <div className="absolute inset-2 border border-gold-500/10 rounded-sm" />
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={avatarImg}
                  alt="Аватар автора проекта"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
              </div>

              {/* Name card */}
              <div className="absolute bottom-6 left-4 right-4 glass-card p-4 text-center">
                <p className="font-display text-xl font-light text-parchment">Архитектор Будущего</p>
                <p className="font-body text-xs text-gold-500/80 tracking-wider mt-1">
                  Исследователь · Визионер
                </p>
              </div>

              {/* Corner decorations */}
              <div className="renaissance-corner corner-tl" style={{ top: "-16px", left: "-16px" }} />
              <div className="renaissance-corner corner-tr" style={{ top: "-16px", right: "-16px" }} />
              <div className="renaissance-corner corner-bl" style={{ bottom: "-16px", left: "-16px" }} />
              <div className="renaissance-corner corner-br" style={{ bottom: "-16px", right: "-16px" }} />
            </div>
          </div>

          {/* Info columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Bio */}
            <div className="animate-on-scroll">
              <h3 className="font-display text-2xl italic text-gold-400 mb-4">Философия</h3>
              <blockquote className="pl-5 border-l-2 border-gold-500/40">
                <p className="font-display text-xl font-light text-parchment italic leading-relaxed">
                  "Архитектура — это не просто строительство. Это диалог человека
                  с природой через пространство, свет и материю. Да Винчи понимал:
                  лучшие здания растут вместе с деревьями."
                </p>
              </blockquote>
            </div>

            {/* Skills */}
            <div ref={barsRef} className="animate-on-scroll">
              <h3 className="font-display text-xl italic text-gold-400 mb-5">Компетенции</h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-sm text-parchment/80">{skill.name}</span>
                      <span className="font-display text-sm text-gold-500">{skill.level}%</span>
                    </div>
                    <div className="h-px bg-forest-700 rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{
                          width: "0%",
                          background: "linear-gradient(90deg, #2d6438, #c9a84c)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="animate-on-scroll">
              <h3 className="font-display text-xl italic text-gold-400 mb-4">Интересы</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, i) => (
                  <span
                    key={i}
                    className="font-body text-xs px-4 py-2 border border-gold-500/25 text-parchment/70 hover:border-gold-500/50 hover:text-parchment transition-all duration-200 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote attribute */}
            <div className="animate-on-scroll glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-gold-500/40 text-5xl font-display leading-none mt-1">"</div>
                <div>
                  <p className="font-display text-lg italic text-parchment/90">
                    Изучать природу — значит изучать архитектуру её совершенства.
                    Каждый лист — это чертёж, каждое дерево — небоскрёб.
                  </p>
                  <p className="font-body text-xs text-gold-500/60 mt-3 tracking-wider">
                    — Девиз проекта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Neural avatar video block */}
          <div className="mt-16 animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl italic text-gold-400">Нейроаватар</h3>
              <p className="font-body text-sm text-parchment/45 mt-1">Изучение архитектуры через интерактивный ЦИФровой аватар</p>
            </div>
            <div className="relative group overflow-hidden rounded-sm border border-gold-500/20 bg-forest-950/60" style={{ minHeight: '400px' }}>
              <video
                className="w-full h-full object-cover"
                controls
                loop
                playsInline
                src=""
                style={{ minHeight: '400px', display: 'none' }}
              />
              {/* Placeholder overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
                {/* Animated rings */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border border-gold-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-2 border border-gold-500/15 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  <div
                    className="w-16 h-16 rounded-full border border-gold-500/40 flex items-center justify-center group-hover:border-gold-500/70 transition-colors"
                    style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-500/70">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-display text-2xl italic text-parchment/60 mb-2">Видео нейроаватара</p>
                  <p className="font-body text-sm text-parchment/35">Укажите src в элементе &lt;video&gt; для загрузки ролика</p>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    {['AI аватар', 'D-ID', 'HeyGen', 'Synthesia'].map((tag) => (
                      <span key={tag} className="font-body text-[10px] tracking-widest uppercase text-gold-500/40 border border-gold-500/15 px-3 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border border-gold-500/10 pointer-events-none" />
              <div className="renaissance-corner corner-tl" />
              <div className="renaissance-corner corner-tr" />
              <div className="renaissance-corner corner-bl" />
              <div className="renaissance-corner corner-br" />
            </div>
          </div>
      </div>
    </section>
  );
}
