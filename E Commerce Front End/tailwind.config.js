/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'vsm': { 'min': '250px', 'max': '399px' },
      'sm': { 'min': '400px', 'max': '600px' },
      'md': { 'min': '601px', 'max': '800px' },
      'lg': { 'min': '801px', 'max': '1199px' },
      'xl': { 'min': '1200px' },
    },
    extend: {
      gap: ['responsive'],
    },
  },
  plugins: [],
}