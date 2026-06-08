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
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' },
        },
        'bounce-pop': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
        'bounce-pop': 'bounce-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      }
    },
  },
  plugins: [],
}
