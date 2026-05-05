import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Cormorant Garant", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          950: "#030d04",
          900: "#0a1f0e",
          800: "#122a17",
          700: "#1a3a1f",
          600: "#224d2a",
          500: "#2d6438",
          400: "#3d8050",
          300: "#5aa06e",
          200: "#85c49a",
          100: "#c2e5ce",
          50: "#edf7f1",
        },
        gold: {
          950: "#2a1a00",
          900: "#4a2f00",
          800: "#7a4f00",
          700: "#a06a00",
          600: "#c9850a",
          500: "#c9a84c",
          400: "#e0c070",
          300: "#e8d090",
          200: "#f0e0b0",
          100: "#f8f0d8",
          50: "#fdf8ee",
        },
        parchment: {
          DEFAULT: "#f5ead8",
          dark: "#e8d5b0",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "ornament-pattern":
          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(201,168,76,0.03) 10px, rgba(201,168,76,0.03) 20px)",
        "gold-gradient":
          "linear-gradient(135deg, #c9a84c 0%, #e8d090 50%, #c9a84c 100%)",
        "forest-gradient":
          "linear-gradient(180deg, #0a1f0e 0%, #122a17 50%, #1a3a1f 100%)",
      },
      boxShadow: {
        gold: "0 0 30px rgba(201, 168, 76, 0.15), 0 4px 20px rgba(0,0,0,0.4)",
        "gold-sm": "0 0 15px rgba(201, 168, 76, 0.1), 0 2px 8px rgba(0,0,0,0.3)",
        "inner-gold": "inset 0 1px 0 rgba(201,168,76,0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
