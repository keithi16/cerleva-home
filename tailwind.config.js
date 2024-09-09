/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: [
    //     "./src/**/*.{zjs,css}",
    //     "index.html"
    //     // './*.php',
    //     // './template-parts/**/*.php',
    //     // './inc/*.php',
    // ],
    // theme: {
    //   extend: {
    //     fontFamily: {
    //         montserrat: ['Montserrat', 'sans-serif']
    //     },
    //     colors: {
    //         'cblack': '#231F20',
    //       },
    //     container: {
    //         screens: {
    //             '3xl': '105.5rem', 
    //         },
    //         padding: {
    //             '3xl': '2.5rem',
    //         }
    //     },
    //   },
    // },
    // plugins: [],

    content: [
      "./src/**/*.{js,css}", // Corrigido para 'js' em vez de 'zjs'
      "./pages/*.html"
      // './*.php',
      // './template-parts/**/*.php',
      // './inc/*.php',
  ],
  theme: {
    extend: {
      fontFamily: {
          montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
          'cblack': '#231F20',
        },
        container: {
          center: true,
      },
    },
  },
  plugins: [],
  }