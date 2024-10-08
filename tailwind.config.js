/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
   safelist: [
    'text-gray-950', 
  ],
  theme: {
    extend: {
      
      
      screens: {
        'xs': '360px',
        'h-sm': { 'raw': '(min-height: 640px)' },   
        'h-md': { 'raw': '(min-height: 768px)' },  
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

