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
        accentDesaturated: "#327EF6",
      },
      fontFamily: {
        arges: ["AT Arges Nero", "ui-serif"],
        ppmori: ["PP Mori", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
