/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legalBlue: {
          DEFAULT: '#001a3560', // El azul exacto de tu logo
          dark: '#051C33',    // Una variante ultra oscura para fondos elegantes
        },
        legalGold: {
          light: '#EBB813',   // Oro brillante de la M
          DEFAULT: '#DBA507', // Punto medio
          dark: '#C49200',    // Oro oscuro de las sombras de la M
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}