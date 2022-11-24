/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252C35",
        primaryDark: "#252525",
        accentLight: "#5146AE",
        accentLighter: "#3460C7",
        accentDark: "#003290",
        accentDesaturated: "#327EF6",
        lightDesaturated: "#7c8086",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        ppmori: ["PP Mori", "sans-serif"],
        // montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
