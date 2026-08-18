/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFBFD",
        surface: "#FFFFFF",
        surfacealt: "#F1F5FB",
        ink: "#0B1220",
        body: "#3B4657",
        muted: "#6B7686",
        border: "#E4E9F0",
        accent: {
          DEFAULT: "#2554C7",
          dark: "#1D3FA0",
          light: "#EEF2FF",
        },
        signal: "#0EA5A6",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -12px rgba(11,18,32,0.10)",
        cardHover: "0 4px 10px rgba(11,18,32,0.06), 0 20px 40px -16px rgba(11,18,32,0.16)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
