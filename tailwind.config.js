/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {colors: {
      primary: '#b29336', // Example: Primary color
      hover: '#c5a33d', // Example: Secondary color
      active: '#a38631', // Example: Accent color
    },},
  },
  plugins: [
    require('flowbite/plugin')
]}