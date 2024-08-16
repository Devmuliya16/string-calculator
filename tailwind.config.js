/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          gray: '#0d3253',
          light: '#f2f4f7',
          alert: '#076dee',
          blue: '#58c8d0'
        }
      }
    },
    
  },
  plugins: [],
}

