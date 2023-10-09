/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
        logo : "url('/Colored Shapes.svg')",
        itachi : "url('/banner.jpg')",
        
      },
      fontFamily:{
        Montserrat : "Montserrat",
        gilroy : 'gilroy',
        
      }
    },
  },
  plugins: [require("daisyui")],
}