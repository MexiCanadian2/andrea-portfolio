import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAFAF8",
        charcoal: "#1C1C1E",
        gold: "#C9A84C",
        "gold-light": "#E8C96A",
        "gold-muted": "#9E7B35",
        sage: "#8A9E85",
        "sage-light": "#B5C9B0",
        "sage-dark": "#5E7A59",
        "charcoal-light": "#3A3A3C",
        "charcoal-muted": "#6B6B6E",
        "ivory-dark": "#F0EFE9",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        portfolio: "1200px",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "drift": "drift 20s ease-in-out infinite alternate",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(20px) translateY(-15px)" },
        },
      },
      transitionDuration: {
        "300": "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
