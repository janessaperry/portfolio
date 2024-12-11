/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        50: "#C4C1D5",
        300: "#292661",
        500: "#171749",
        700: "#0C0C34",
      },
      pink: {
        500: "#F1A7F2",
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
      },
    },
    fontFamily: {
      heading: ["Comfortaa", "ui-sans-serif", "sans-serif"],
      body: ["Urbanist", "ui-sans-serif", "sans-serif"],
      mono: ["Fira Sans", "ui-monospace"],
    },
    extend: {},
  },
  plugins: [],
};
