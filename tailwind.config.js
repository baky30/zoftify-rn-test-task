/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      blue: "#0071D8",
      red: "#D91616",
      "red-light": "#FCE8E8",
      green: "#10C137",
      "green-light": "#E8F9EB",
      gray: "#F2F3F3",
      "gray-light": "#F8F8F8",
      "gray-dark": "#8A8C90",
      black: "#151C26",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
