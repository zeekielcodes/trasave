/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"]
      },
      colors: {
        bigGreen: "#49B649"
      },
      backgroundImage: {
        "money": "url('./images/moneybg.png')",
         "footer": "url('./images/footerbg.png')"
      }
    },
  },
  plugins: [],
}
