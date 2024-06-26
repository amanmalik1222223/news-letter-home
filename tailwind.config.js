/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softOrange: '#ea9b57',
        softRed: '#f04b3f',
        offWhite: '#fffbfa',
        grayishBlue: '#b6b9c4',
        darkGrayishBlue: '#545868',
        veryDarkBlue: '#07071a',
        customRed: '#D75E54', // Add your custom color here
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
}
