/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
   
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'my-violet': {
          100: '#DEBAC0',
          200: '#E39EC1',
          300: '#C47AC0',
          400: '#77567A',
          800: '#2F323A',
        },
      },
    },
  },
  plugins: [],
}


