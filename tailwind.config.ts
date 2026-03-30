import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f3f9",
          100: "#d9dff2",
          200: "#b3bfe5",
          300: "#8d9fd8",
          400: "#667fcb",
          500: "#3f5fbe",
          600: "#334c98",
          700: "#263972",
          800: "#1a264d",
          900: "#0d1327",
          950: "#080b16",
        },
        lightning: {
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
        },
        dark: {
          bg: "#0a0e17",
          card: "#111827",
          border: "#1f2937",
          text: "#f9fafb",
          muted: "#9ca3af",
        },
        accent: {
          blue: {
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        ticker: "ticker 30s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glowPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(132, 204, 22, 0.4))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(132, 204, 22, 0.8))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
