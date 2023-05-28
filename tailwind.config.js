/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("autoprefixer"), 
  ],
  theme: {
    extend: {
      fontFamily: {
        'rw': ['Raleway', 'sans-serif'],
        'ms': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#2B4E8C ',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
      screens: {
        'ls': '320px',
        'xls': '450px',
        'xxl': '1400px'
      }
    },
  },
}
