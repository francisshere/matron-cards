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
        heading: ['Inter', 'sans-serif'],
        body: ['Fredoka', 'sans-serif'],
      },
      boxShadow: {
        btn: '0px 6px 12px 2px rgba(233, 124, 161, 0.6)',
      }
    },
  },
  plugins: [],
}
