/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        desktop: "1680px",
      },
    },
    extend: {},
    colors: {
      "black-out": "#222222",
      "absolute-zero": "#0047BA",
      "dark-midnight-blue": "#00307D",
      white: "#ffffff",
      gray: "#7185A7",
      "bright-camouflage": "#D8E2F3",
      "salon-bleu": "rgb(126, 135, 150)",
      "berwick-berry": "rgb(113, 133, 167)",
      "berwick-berry-30": "rgba(113, 133, 167, 0.3)",
      carmine: "#D50032",
      "statuses-red": "#FF4E6E",
      "distant-horizon": "#F2F7FB",
      "aquarelle-purple": "rgba(216, 226, 243, 1)",
      "aircraft-white": "rgba(237, 242, 247, 1)",
      "american-orange": "#ff8a00",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      benzin: ["Benzin", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
