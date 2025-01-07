/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Primary color (Blue)
        secondary: '#7c3aed', // Secondary color (Violet)
      },
      backgroundImage: {
        'primary': 'linear-gradient(to top left, #2563eb, #7c3aed)', // Your primary gradient
        'hover': 'linear-gradient(to top left, #4c83e7, #9a6ae5)', // Lighter gradient for hover
        'active': 'linear-gradient(to top left, #1d45a1, #6a38b1)', // Darker gradient for active
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
