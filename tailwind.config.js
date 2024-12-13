/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      blue: {
        50: "#C4C1D5",
        100: "#474168",
        300: "#292661",
        500: "#171749",
        700: "#0C0C34",
      },
      pink: {
        500: "#F1A7F2",
        700: "#59185a",
      },
      seafoam: {
        500: "#95DAC5",
      },
      ivory: {
        500: "#E7E6EC",
      },
      mauve: {
        300: "#DDB5CB",
        500: "#BF9FB1",
        700: "#BA8CA6",
        800: "#8B6A7C",
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
