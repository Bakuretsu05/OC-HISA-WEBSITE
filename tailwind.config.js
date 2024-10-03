/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      monoton: ["Monoton"],
      chinese: ["Noto Sans TC"],
    },

    extend: {
      colors: {
        "grad-red": "#FF004D",
        "grad-red2": "#FF3E6D",
        "grad-orange": "#FFC700",
        "grad-orange2": "#FFCA36",
        "transparent-layer": "#ffffff33",
        "transparent-layer-bright": "#ffffff88",
        "kaorou-event-color": "#FDDE3F",
        "yingxin-event-color": "#3FFDDB",
        "christmas-event-color": "#3FE6FD",

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
        "42%": "42%",
        "60%": "60%",
        "70%": "70%",

        /**
         ** [  0.           4.34782609   8.69565217  13.04347826  17.39130435
         ** 21.73913043  26.08695652  30.43478261  34.7826087   39.13043478
         ** 43.47826087  47.82608696  52.17391304  56.52173913  60.86956522
         ** 65.2173913   69.56521739  73.91304348  78.26086957  82.60869565
         ** 86.95652174  91.30434783  95.65217391 100.        ]
         */

        "timeline-now-0": "2%",
        "timeline-now-1": "4.3%",
        "timeline-now-2": "8.7%",
        "timeline-now-3": "13.0%",
        "timeline-now-4": "17.4%",
        "timeline-now-5": "21.7%",
        "timeline-now-6": "26.1%",
        "timeline-now-7": "30.4%",
        "timeline-now-8": "34.8%",
        "timeline-now-9": "39.1%",
        "timeline-now-10": "43.5%",
        "timeline-now-11": "47.8%",
        "timeline-now-12": "52.2%",
        "timeline-now-13": "56.5%",
        "timeline-now-14": "60.9%",
        "timeline-now-15": "65.2%",
        "timeline-now-16": "69.6%",
        "timeline-now-17": "73.9%",
        "timeline-now-18": "78.3%",
        "timeline-now-19": "82.6%",
        "timeline-now-20": "87.0%",
        "timeline-now-21": "91.3%",
        "timeline-now-22": "95.7%",
        "timeline-now-23": "100%",

        "timeline-info-width": "30rem",
      },
      boxShadow: {
        "card-shadow": "0.5rem 0.5rem 0 0 #33333333",
      },
    },
    plugins: [],
  },
};
