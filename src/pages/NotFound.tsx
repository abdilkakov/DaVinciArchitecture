import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-forest-900 text-parchment">
      <div className="text-center space-y-6">
        <h1 className="font-display text-8xl font-light text-gradient-gold">404</h1>
        <p className="font-display text-2xl text-gold-400 italic">Страница не найдена</p>
        <p className="body-text max-w-md mx-auto">
          Этот путь ещё не проложен. Вернитесь к главной странице, чтобы продолжить исследование.
        </p>
        <button onClick={() => navigate("/")} className="btn-gold mt-4">
          На главную
        </button>
      </div>
    </div>
  );
}
