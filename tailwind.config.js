/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "candy-pink": "#E77679",
        "cinnamon-satin": "#D65C7D",
        mauvelous: "#F1A5A2",
        "medium-vermilion": "#DD5137",
      },
      backgroundImage: {
        "body-pattern":
          "linear-gradient(315deg,#35096D 0%,#C850C0 46%,#F18C2E 100%)",
      },
      boxShadow: {
        primary: "0 4px 30px rgba(0, 0, 0, 0.1)",
        "bevel-primary":
          "inset 0.8rem 0.8rem 1rem 0 rgba(234,139,139,1), inset -1.25rem -1.25rem 1rem 0 rgba(201,90,123,1)",
        "bevel-secondary":
          "inset 0.8rem 0.8rem 1rem 0 rgba(241,148,130,1), inset -1.25rem -1.25rem 1rem 0 rgba(216,109,117,1)",
      },
    },
  },
  plugins: [],
};
