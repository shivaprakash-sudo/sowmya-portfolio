/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#6A0DAD",
          byzantine: "#B313B3",
          gold: "#FFD700",
        },
        neutral: {
          "light-gray": "#CDCDCB",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
