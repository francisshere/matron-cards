/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FDF5F7',
        card: '#FFFFFF',
        light: '#F7C4D5',
        mid: '#E97CA1',
        primary: '#D42F6B',
        text: '#4A1529',
        muted: '#855264',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Inter', 'sans-serif'],
        body: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
