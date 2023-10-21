/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "background": "#E5EEFF",
        "itcBlue":"#0058FF"
      },
      fontFamily:{
        "roboto": "Roboto",
        "circularMedium": "CIRCULARMedium"
      },
      backgroundImage:{
        "paisaje": "url(/dist/imgs/ruta.jpg)"
      }
    },
  },
  plugins: [],
}

