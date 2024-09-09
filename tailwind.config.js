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
        "kaorou-event-color": "#FDDE3F",
        "yingxin-event-color": "#3FFDDB",

        "timeline-grad-stop-1": "#FF9345",
        "timeline-grad-stop-2": "#7DEFFF",
        "timeline-grad-stop-3": "#FF84D5",
        "timeline-grad-stop-4": "#FF5151",
      },
      animation: {
        wave1: "wave1 10s linear infinite",
        wave2: "wave2 15s linear infinite",
        wave3: "wave3 15s linear infinite",
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
        wave2: {
          "0% 50% 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "75%": {
            transform: "rotate(-90deg)",
          },
        },
        wave3: {
          "0% 50% 100%": {
            transform: "rotate(-45deg)",
          },
          "25%": {
            transform: "rotate(-75deg)",
          },
          "75%": {
            transform: "rotate(-15deg)",
          },
        },
      },
      spacing: {
        thin: "1px",
        "aboutpage-p-width": "40%",
        "timeline-center-fix": "0.35rem",
        "timeline-new-year-border": "41%",
        30: "7.5rem",
        "13%": "13%",
        "30%": "30%",
      },
      boxShadow: {
        "card-shadow": "0.5rem 0.5rem 0 0 #33333333",
      },
    },
  },
  plugins: [],
};
