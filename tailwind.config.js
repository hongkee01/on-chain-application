/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary' : 'white', //background
        'secondary': 'black', //web3.0
        'tprimary' : 'black',
        'tsecondary': '#c3cace',
        'dark': '#191b1f',
        'light': 'white'
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
