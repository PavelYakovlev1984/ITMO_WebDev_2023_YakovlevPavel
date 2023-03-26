/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-yellow': '#efaf4d',
        'dark-bg': '#00001a',
      },
    },
    plugins: [],
  }
}
