const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/interactive_pricing_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        prim: {
          'soft-cyan': '#a5f3eb' /* Full Slider Bar */,
          'strong-cyan': '#10d5c2' /* Slider Backround */,
          'light-grayish-red': '#feece7' /* Discount Background */,
          'light-red': '#ff8c66' /* Discount Text */,
          'pale-blue': '#bdccff' /* CTA Text */,
        },
        neutral: {
          'very-pale-blue': '#fafbff' /* Main Background */,
          'light-grayish-blue': '#eaeefb' /* Empty Slider Bar */,
          'very-dark-black-blue1': '#cdd7ee' /* Toggle Background */,
          'grayish-blue': '#858fad' /* Text */,
          'dark-desat-blue': '#293356' /* Text & CTA Background */,
        },
      },
      fontSize: {
        'body-copy': '15px',
      },
      fontFamily: {
        manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
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
