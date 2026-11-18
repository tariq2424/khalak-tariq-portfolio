/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: v("bg"),
        surface: v("surface"),
        surface2: v("surface2"),
        line: v("line"),
        fg: v("fg"),
        body: v("body"),
        muted: v("muted"),
        accent: v("accent"),
        accenttext: v("accenttext"),
        cyan2: v("cyan2"),
        ok: v("ok"),
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: { content: "1180px" },
      boxShadow: {
        card: "0 1px 2px rgb(0 0 0 / 0.08), 0 12px 32px -16px rgb(0 0 0 / 0.35)",
        glow: "0 0 0 1px rgb(var(--accent) / 0.35), 0 12px 40px -12px rgb(var(--accent) / 0.45)",
      },
      borderRadius: { xl2: "1.25rem" },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.5)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
