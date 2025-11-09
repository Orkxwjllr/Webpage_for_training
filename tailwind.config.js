/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        'gray-275': '#e0e0e0', // примерно между gray-200 и gray-300
      },
    },
    extend: {
      colors: {
        'gray-250': '#e5e5e5', // пример HEX-кода
      },
    },
  },
  
}
