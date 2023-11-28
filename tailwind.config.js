/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#f59e0b',
        secondary : '#0f172a',
        sechead : '#1e293b',
        detail : '#334155'
      },
      screens:{
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
}

