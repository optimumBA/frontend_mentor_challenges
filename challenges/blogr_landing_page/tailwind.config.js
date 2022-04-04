const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'chat-bg-l': '#ede5f2',
        prim: {
          'light-red': '#ff525d' /* CTA text */,
          'very-light-red': '#ff7a85' /* CTA hover background */,
          'very-dark-blue': '#1f3f5b' /* headings */,
        },
        neutral: {
          'grayish-blue': '#c8c8cb' /* footer text */,
          'very-dark-grayish-blue': '#4b5862' /* body copy */,
          'very-dark-black-blue': '#25252d' /* footer background */,
        },
        grad: {
          /* Intro/CTA mobile nav */
          'very-light-red': '#ff8f70',
          'light-red': '#ff3d54',
          /* Gradient -> body */
          'very-dark-gray-blue': '#2c2d3f',
          'very-dark-desat-blue': '#3f4164',
        },
      },
      fontSize: {
        'body-copy': '16px',
      },
      fontFamily: {
        overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        /* Responsive breakpoints */ mobile: '375px',
        // => @media (min-width: 375px) { ... }
        tablet: '768px',
        // => @media (min-width: 768px) { ... }
        tablet2: '900px',
        // => @media (min-width: 900px) { ... }
        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
  variants: {},
}
