/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
        colors: {
      primaryColor: '#0B0D17',
      secColor: '#D0D6F9',
      'light-gray': '#f0f0f0',
    },
    fontFamily: {
      bellefair: ['Bellefair', 'sans-serif'],
      barlow: ['Barlow Condensed', 'sans-serif']
    },
    boxShadow: {
        'animate': '0 0 0 0 var(--clr-light)',
      },
      animation: {
        'shadow': 'shadow 2s infinite',
      }
    },
  
  },
  plugins: [],
}

