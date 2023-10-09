/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
        logo : "url('./public/Colored Shapes.svg')",
        itachi : "url('./src/components/Banner/wallpapersden.com_itachi-uchiha-digital-art_1920x1080.jpg')",
        
      },
      fontFamily:{
        Montserrat : "Montserrat",
        gilroy : 'gilroy',
        
      }
    },
  },
  plugins: [require("daisyui")],
}