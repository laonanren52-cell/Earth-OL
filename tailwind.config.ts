import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-noto-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        ivory: {
          50: "#FDFCFA",
          100: "#F7F5F2",
          150: "#F0ECE7",
          200: "#EDE8E3",
          300: "#D5CCC4",
          400: "#B8ADA2",
          500: "#9A8E80",
        },
        sage: {
          50: "#F3F7F5",
          100: "#E4EDE8",
          200: "#C8DAD1",
          300: "#A4C4B6",
          400: "#7CAB9A",
          500: "#63907D",
          600: "#4D7564",
        },
        clay: {
          50: "#F8F4F2",
          100: "#F0E8E3",
          200: "#E0D0C8",
          300: "#CBB4A8",
          400: "#B49888",
          500: "#9E7E6E",
        },
        amethyst: {
          50: "#F5F3F8",
          100: "#EBE6F1",
          200: "#D4CCE3",
          300: "#B4A8CC",
          400: "#9482B8",
          500: "#7A66A0",
        },
        gold: {
          50: "#FDF9F0",
          100: "#FBF2DC",
          200: "#F0DFAA",
          300: "#E0C87A",
          400: "#C4A55A",
          500: "#A68A44",
        },
      },
      borderRadius: {
        DEFAULT: "0.625rem",
        lg: "0.75rem",
        xl: "0.875rem",
        "2xl": "1rem",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(45, 40, 37, 0.04)",
        card: "0 2px 8px rgba(45, 40, 37, 0.05)",
        elevated: "0 4px 20px rgba(45, 40, 37, 0.07)",
        modal: "0 8px 40px rgba(45, 40, 37, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;