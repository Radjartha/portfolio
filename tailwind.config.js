/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','profile.html','commission.html','portfolio.html','contact.html'],

  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {

      backgroundImage: {
        'header1': "url('img/Header1.png')"
      },
      fontSize: {
        uxl:['200px'],
        txl:['150px'],
        lxl:['130px'],
      },
      fontFamily: {
        judul: ['Teko'],
      },
      colors: {
        crimson : '#C85F5C',
        yellowb : '#f4d300',
      },
      screen: {
        '2xl':'1320px'

      },

    },
  },
  plugins: [],
}
