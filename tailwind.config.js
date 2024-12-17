/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "black",
      blue: {
        50: "#C4C1D5",
        100: "#5E52A0",
        300: "#292661",
        500: "#171749",
        700: "#0C0C34",
        neon: "#009DFF",
      },
      fuschia: {
        50: "#FACFFA",
        300: "#F1A7F2",
        500: "#911791",
        700: "#59185A",
        neon: "#FC00FF",
        muted: "#C083C0",
      },
      seafoam: {
        500: "#95DAC5",
        700: "#17946e",
        neon: "#00FFB1",
      },
    },
    fontFamily: {
      heading: ["Comfortaa", "ui-sans-serif", "sans-serif"],
      body: ["Urbanist", "ui-sans-serif", "sans-serif"],
      mono: ["Fira Mono", "ui-monospace"],
    },
    extend: {
      animation: {
        radiate: "radiate 2s linear infinite",
      },
      keyframes: {
        radiate: {
          "0%": { "box-shadow": "0 0 0 0px rgba(149, 218, 197, 00)" },
          "40%": { "box-shadow": "0 0 0 0px rgba(149, 218, 197, 0.4)" },
          "60%": { "box-shadow": "0 0 0 6px rgba(149, 218, 197, 0.4)" },
          "100%": { "box-shadow": "0 0 0 8px rgba(149, 218, 197, 0)" },
        },
      },
    },
  },
  plugins: [],
};
