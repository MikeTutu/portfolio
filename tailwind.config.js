/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      },
      colors:{
        gold:"#FFC107",
        wall:'#1E1E28'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
