import { transformWithEsbuild } from "vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins"],
      monoton: ["Monoton"],
    },
    extend: {
      colors: {
        "grad-red": "#FF004D",
        "grad-orange": "#FFC700",
        "transparent-layer": "#ffffff33",
        "transparent-layer-bright": "#ffffff88",
      },
      animation: {
        wave1: "wave1 10s linear infinite",
      },
      keyframes: {
        wave1: {
          "0% 50% 100%": {
            transform: "rotate(45deg)",
          },
          "25%": {
            transform: "rotate(75deg)",
          },
          "75%": {
            transform: "rotate(15deg)",
          },
        },
      },
      spacing: {
        thin: "1px",
        "aboutpage-p-width": "40%",
      },
      boxShadow: {
        "card-shadow": "0.5rem 0.5rem 0 0 #33333333",
      },
    },
  },
  plugins: [],
};
