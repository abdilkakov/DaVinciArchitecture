import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "bot",
    text: "Добро пожаловать! Я — ИИ-консультант по биофильной архитектуре и наследию да Винчи. Задайте мне любой вопрос об эко-зданиях, вертикальных садах или архитектурных идеях Леонардо.",
    time: "сейчас",
  },
];

const suggestions = [
  "Что такое биофильный дизайн?",
  "Расскажи об идеальном городе да Винчи",
  "Как устроены вертикальные сады?",
  "Примеры эко-зданий в мире",
];

const botResponses: Record<string, string> = {
  биофиль: "Биофильный дизайн — архитектурный подход, основанный на врождённой тяге человека к природе. Он включает: живые стены, природный свет, органические формы, природные материалы и виды на зелень. Исследования показывают, что биофильные пространства снижают стресс на 15–25% и повышают продуктивность.",
  "да винч": "Леонардо да Винчи разработал концепцию «идеального города» в 1485 году — двухуровневую структуру, где верхний ярус предназначался для людей и садов, нижний — для транспорта и коммуникаций. Он описывал здания как живые организмы с «артериями», «лёгкими» и «скелетом». Эти идеи стали основой современной биофильной архитектуры.",
  вертикальн: "Вертикальные сады — это системы живых растений, интегрированных в фасады и интерьеры зданий. Они работают через: модульные панели с субстратом, автоматический полив, систему дренажа. Преимущества: снижение температуры фасада на 30%, поглощение CO₂, шумоизоляция до 12 дБ и улучшение качества воздуха.",
  боско: "Bosco Verticale в Милане (2014, архитектор Stefano Boeri) — первый в мире «вертикальный лес». Две башни высотой 80 и 112 метров несут на балконах 900 деревьев, 5 000 кустарников и 11 000 многолетних растений. Проект стал символом биофильной архитектуры и получил множество международных наград.",
  пример: "Выдающиеся примеры эко-зданий:\n• Bosco Verticale, Милан — вертикальный лес\n• Amazon Spheres, Сиэтл — биосферы внутри офиса\n• Jewel Changi Airport, Сингапур — водопад внутри аэропорта\n• The Edge, Амстердам — умный биофильный офис\n• One Central Park, Сидней — вертикальные сады Патрика Блана",
  default: "Это интересный вопрос о биофильной архитектуре! Данная область объединяет ренессансную мудрость да Винчи с современными технологиями. Архитектура будущего — это живые здания, которые дышат, растут и адаптируются, создавая гармонию между человеком и природой. Что именно вас интересует: история, технологии или примеры зданий?",
};

function getBotResponse(text: string): string {
  const lower = text.toLowerCase();
  for (const [key, response] of Object.entries(botResponses)) {
    if (key !== "default" && lower.includes(key)) {
      return response;
    }
  }
  return botResponses.default;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getTime = () => {
    return new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text: text.trim(),
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const delay = 1200 + Math.random() * 1000;
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: getBotResponse(text),
        time: getTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <section id="chatbot" ref={sectionRef} className="relative py-24 lg:py-32 bg-forest-950">
      <div className="absolute inset-0 bg-ornament-pattern opacity-15" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="section-subtitle mb-3">Раздел VII</p>
          <div className="ornament-line mb-6">
            <h2 className="section-title">
              ИИ <span className="text-gradient-gold italic">Чат-бот</span>
            </h2>
          </div>
          <p className="body-text max-w-2xl mx-auto">
            Задайте вопрос об архитектуре да Винчи, биофильном дизайне или эко-зданиях —
            искусственный интеллект ответит с глубиной ренессансного мыслителя.
          </p>
        </div>

        {/* Chat container */}
        <div className="animate-on-scroll">
          <div className="glass-card overflow-hidden" style={{ borderRadius: "4px" }}>
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gold-500/20 bg-forest-900/60">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-forest-600 to-gold-600 flex items-center justify-center">
                  <Bot size={18} className="text-parchment" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-forest-900" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-parchment">Виторио</p>
                <p className="font-body text-xs text-parchment/50">Консультант по биофильной архитектуре</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Sparkles size={14} className="text-gold-500/60" />
                <span className="font-body text-xs text-gold-500/60 tracking-wider">AI</span>
              </div>
            </div>

            {/* Messages area */}
            <div
              className="overflow-y-auto p-5 space-y-4"
              style={{ height: "380px", scrollbarWidth: "thin" }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === "bot"
                        ? "bg-gradient-to-br from-forest-600 to-gold-600"
                        : "bg-gradient-to-br from-forest-500 to-forest-700 border border-gold-500/30"
                    }`}
                  >
                    {msg.role === "bot" ? (
                      <Bot size={14} className="text-parchment" />
                    ) : (
                      <User size={14} className="text-parchment" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-sm ${
                      msg.role === "bot"
                        ? "bg-forest-800/70 border border-gold-500/15"
                        : "bg-forest-700/80 border border-gold-500/25"
                    }`}
                  >
                    <p className="font-body text-sm text-parchment/90 leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </p>
                    <p className="font-body text-[10px] text-parchment/30 mt-1.5">{msg.time}</p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-600 to-gold-600 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-parchment" />
                  </div>
                  <div className="bg-forest-800/70 border border-gold-500/15 px-4 py-3 rounded-sm">
                    <div className="flex gap-1 items-center">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-gold-500/60 animate-pulse"
                          style={{ animationDelay: `${i * 200}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-5 py-3 border-t border-gold-500/10 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="font-body text-xs px-3 py-1.5 border border-gold-500/20 text-parchment/60 hover:border-gold-500/50 hover:text-parchment/80 rounded-sm transition-all duration-200"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input area */}
            <div className="px-5 py-4 border-t border-gold-500/20 bg-forest-900/40">
              <div className="flex gap-3 items-end">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Задайте вопрос об архитектуре..."
                  rows={2}
                  className="flex-1 bg-forest-950/60 border border-gold-500/20 text-parchment/90 placeholder:text-parchment/30 font-body text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                  style={{ minHeight: "52px" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  className="flex-shrink-0 w-11 h-11 rounded-sm flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #e8d090, #c9a84c)",
                    backgroundSize: "200% auto",
                  }}
                >
                  <Send size={16} className="text-forest-900" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
