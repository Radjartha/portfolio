/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','profile.html','commission.html','portfolio.html'],

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
