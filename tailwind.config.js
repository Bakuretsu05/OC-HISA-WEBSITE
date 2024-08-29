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
