import { useState, useRef, useEffect } from "react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

// Canopy Grid by zhasulanabdilkakov (Suno)
const MUSIC_URL =
  "https://cdn1.suno.ai/ccc75d2d-6030-4046-8093-0aca89218081.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [expanded, setExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;
    const onCanPlay = () => setLoaded(true);
    audio.addEventListener("canplay", onCanPlay);
    return () => audio.removeEventListener("canplay", onCanPlay);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => { });
    }
  };

  const toggleMute = () => setMuted((m) => !m);

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} preload="none" />

      {/* Floating container */}
      <div
        className={`fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2 transition-all duration-300`}
      >
        {/* Expanded panel */}
        {expanded && (
          <div
            className="glass-card px-5 py-4 flex flex-col gap-3 animate-fade-up"
            style={{ minWidth: "220px" }}
          >
            {/* Track info */}
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${playing ? "animate-spin-slow" : ""
                  }`}
                style={{
                  background: "linear-gradient(135deg, #224d2a, #c9a84c)",
                }}
              >
                <Music size={14} className="text-parchment" />
              </div>
              <div className="overflow-hidden">
                <p className="font-display text-sm font-medium text-parchment truncate leading-tight">
                  Canopy Grid
                </p>
                <p className="font-body text-[10px] text-gold-500/70 truncate">
                  zhasulanabdilkakov — Suno
                </p>
              </div>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-parchment/60 hover:text-gold-400 transition-colors"
                aria-label={muted ? "Включить звук" : "Выключить звук"}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muted ? 0 : volume}
                onChange={(e) => {
                  setVolume(Number(e.target.value));
                  setMuted(false);
                }}
                className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #c9a84c ${(muted ? 0 : volume) * 100}%, rgba(201,168,76,0.2) ${(muted ? 0 : volume) * 100}%)`,
                  accentColor: "#c9a84c",
                }}
              />
              <span className="font-body text-[10px] text-parchment/40 w-7 text-right">
                {Math.round((muted ? 0 : volume) * 100)}%
              </span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              {playing ? (
                <span className="flex items-center gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="inline-block w-0.5 rounded-full bg-gold-500 animate-pulse"
                      style={{
                        height: `${8 + i * 3}px`,
                        animationDelay: `${i * 120}ms`,
                      }}
                    />
                  ))}
                  <span className="font-body text-[10px] text-gold-500/70 ml-1">Играет</span>
                </span>
              ) : (
                <span className="font-body text-[10px] text-parchment/40">
                  {loaded ? "Готово к воспроизведению" : "Загрузка..."}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Main floating button */}
        <div className="flex items-center gap-2">
          {/* Toggle expand */}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-gold-500/30 bg-forest-900/80 backdrop-blur-md text-parchment/50 hover:text-gold-400 hover:border-gold-500/60 transition-all duration-200"
            aria-label="Управление музыкой"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
          >
            <Music size={14} />
          </button>

          {/* Play / Pause button */}
          <button
            onClick={togglePlay}
            className="w-11 h-11 flex items-center justify-center rounded-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: playing
                ? "linear-gradient(135deg, #c9a84c, #e8d090, #c9a84c)"
                : "rgba(10, 31, 14, 0.9)",
              border: playing ? "none" : "1px solid rgba(201,168,76,0.5)",
              boxShadow: playing
                ? "0 0 20px rgba(201,168,76,0.35), 0 4px 20px rgba(0,0,0,0.5)"
                : "0 4px 20px rgba(0,0,0,0.4)",
              backdropFilter: "blur(12px)",
            }}
            aria-label={playing ? "Пауза" : "Воспроизвести"}
          >
            {playing ? (
              <Pause size={16} className="text-forest-900" />
            ) : (
              <Play size={16} className="text-gold-400 ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
