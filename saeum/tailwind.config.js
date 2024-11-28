/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#222bb7',
          light: '#333dd7',
        }
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

