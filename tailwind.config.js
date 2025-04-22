/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "black",
      blue: {
        50: "#C4C1D5",
        100: "#413488",
        300: "#201D5A",
        500: "#171749",
        700: "#0C0C34",
        neon: "#009DFF",
      },
      fuschia: {
        50: "#FACFFA",
        100: "#E3ADE3",
        300: "#F1A7F2",
        500: "#911791",
        700: "#59185A",
        900: "#3A0E53",
        neon: "#FC00FF",
        muted: "#C083C0",
      },
      seafoam: {
        500: "#95DAC5",
        700: "#17946E",
        neon: "#00FFB1",
      },
    },
    fontFamily: {
      heading: ["Comfortaa", "ui-sans-serif", "sans-serif"],
      body: ["Urbanist", "ui-sans-serif", "sans-serif"],
      mono: ["Hack Nerd Font", "ui-monospace"],
    },
    extend: {
      animation: {
        slideUpAndOut: "slideUpAndOut 1.5s ease 3s forwards",
        radiate: "radiate 2s linear infinite",
        bokeh1: "moveBokeh1 14s infinite alternate linear",
        bokeh2: "moveBokeh2 12s infinite alternate linear",
        bokeh3: "moveBokeh3 14s infinite alternate linear",
        bokeh4: "moveBokeh4 16s infinite alternate linear",
      },
      keyframes: {
        slideUpAndOut: {
          "0%": {
            transform: "translateY(0%)",
            opacity: "100%",
            visibility: "visible",
          },
          "100%": {
            transform: "translateY(-120%)",
            opacity: "0%",
            height: 0,
            visibility: "hidden",
          },
        },
        radiate: {
          "0%": {"box-shadow": "0 0 0 0px rgba(149, 218, 197, 00)"},
          "40%": {"box-shadow": "0 0 0 0px rgba(149, 218, 197, 0.4)"},
          "60%": {"box-shadow": "0 0 0 6px rgba(149, 218, 197, 0.4)"},
          "100%": {"box-shadow": "0 0 0 8px rgba(149, 218, 197, 0)"},
        },
        moveBokeh1: {
          "0%": {transform: "translate(0, 0)"},
          "50%": {transform: "translate(15%, 2%)"},
          "100%": {transform: "translate(30%, 4%)"},
        },
        moveBokeh2: {
          "0%": {transform: "translate(0, 0)"},
          "50%": {transform: "translate(-25%, -4%)"},
          "100%": {transform: "translate(50%, 2%)"},
        },
        moveBokeh3: {
          "0%": {transform: "translate(0, 0)"},
          "50%": {transform: "translate(-25%, 2%)"},
          "100%": {transform: "translate(50%, -4%)"},
        },
        moveBokeh4: {
          "0%": {transform: "translate(0, 0)"},
          "50%": {transform: "translate(-20%, 2%)"},
          "100%": {transform: "translate(-10, 4%)"},
        },
      },
    },
  },
  plugins: [],
};
