const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/faq_accordion_card/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'chat-bg-l': '#ede5f2',
        prim: {
          /* Text */ 'very-dark-des-blue': '#1d1e35',
          'soft-red': '#f47c57',
        },
        grad: {
          /* Background gradient */ 'soft-violet': '#af67e9',
          'soft-blue': '#6565e7',
        },
        neutral: {
          /* Text */ 'very-dark-grayish-blue': '#4a4b5e',
          'dark-grayish-blue': '#787887',
        },
        dividers: {
          'light-grayish-blue': '#e7e7e9',
        },
        //hover: '#766cf1',
      },
      fontSize: {
        'body-copy': '42px',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        /* Responsive breakpoints */ mobile: '375px',
        // => @media (min-width: 375px) { ... }
        tablet: '768px',
        // => @media (min-width: 768px) { ... }
        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
  variants: {},
}
