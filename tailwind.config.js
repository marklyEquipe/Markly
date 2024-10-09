/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        "defaultColor": "#1A1A1A",
        "defaultLightPurple": "#9700B5",
        "defaultDarkPurple": "#370042",
        "defaultColorHeader": "#151515",
        "defaultSubtitle": "#DEDEDE",
        "defaultYellow": "#FFBB00",
        "defaultOrange": "#FF6E05",
      }
    },
  },
  plugins: [],
}
