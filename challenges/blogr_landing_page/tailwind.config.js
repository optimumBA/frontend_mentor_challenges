module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',

        //Primary

        'light-red-prim': '#ff525d,',
        'very-light-red-prim': '#ff7a85',

        //Headings

        'very-dark-blue': '#1f3f5b',

        //Neutral

        white: '#ffff',
        'grayish-blue': '#c8c8cb',
        'very-dark-grayish-blue': '#4b5862',
        'very-dark-black-blue': '#25252d',

        // Gradient

        //Background gradient - Intro/CTA mobile nav:

        'very-light-red': '#ff8f70',
        'light-red': '#ff3d54',

        //Background gradient - body:

        'very-dark-gray-blue': '#2c2d3f',
        'very-dark-desaturated-blue': '#3f4164',
      },
      fontFamily: {
        overpass: ['Overpass'],
        ubuntu: ['Ubuntu'],
      },
      backgroundImage: {
        circlesBg: "url('../images/bg-pattern-circles.svg')",
        mobileBg: "url('../images/bg-pattern-intro-mobile.svg')",
       
      },
    },
  },
  plugins: [],
  variants: {},
}
