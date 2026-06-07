/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FBF9F6',
        'secondary': '#F3EDE4',
        'main': '#2C3E35',
        'warm': '#D98A6C',
        'success': '#5F8575',
        'warning': '#E2B659'
      },
      fontFamily: {
        heading: ['Playfair Display', 'Inter', 'sans-serif'],
        body: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
