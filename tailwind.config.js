/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        black : "#000000",
        green : "#20C6B1",
        backgroundPrimary: "#FFFFF2",
        white: "#FFFFFF",
        gray: "#EBF0F3",
        slate: "#D9D9D9",
        backgroundSecondary: "#F2FFFD",
        backgroundThird: "#EBF0F3",
        placeholder: "rgba(0, 0, 0, 0.50)"
      },
      borderColor:{
        border: '1px solid #20C6B1',
        borderCard: '1px solid #000'
      },
      borderRadius: {
        radius: "5px",
        borderRadius: '2px',
        borderCard: '10px'
      }
    },
  },
  plugins: [],
}