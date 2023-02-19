/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','info.html','commission.html'],

  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {

      backgroundImage: {
        'header1': "url('img/Header1.png')"
      },

      colors: {
        crimson : '#C85F5C'
      },
      screen: {
        '2xl':'1320px'
      },
    },
  },
  plugins: [],
}
