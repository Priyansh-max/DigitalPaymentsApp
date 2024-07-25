/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FF0000',
        'black': '#353935',
        'grey' : '#808080',
        'pure-black' : '#000000',
        'green': '#00C000',
        'dark-green': '#008000',
      },
    },
  },
  plugins: [],
}