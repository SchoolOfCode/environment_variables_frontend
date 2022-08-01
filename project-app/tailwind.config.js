/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Montserrat", ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        "hero-background": "url('/hero-background.png')",
        "weather-background": "url('/weather-background.jpg')",
      },
    },
  },
  plugins: [],
};
