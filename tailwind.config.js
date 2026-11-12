/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#12606A',
          secondary: '#87929C',
          light: '#F5F2EA',
          dark: '#0B1623',
        }
      }
    },
  },
  plugins: [],
}