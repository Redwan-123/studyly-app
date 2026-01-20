/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#3B82F6',   
        brandPurple: '#A855F7', 
        brandBg: '#F8FAF7',     
      },
    },
  },
  plugins: [],
}