module.exports = {
  content: ['./challenges/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },
      screens: {
        'mob-sm': '360px',
        // => @media (min-width: 360px) { ... }
      },
    },
  },
  plugins: [],
  variants: {},
}
