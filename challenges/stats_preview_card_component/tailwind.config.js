module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        white: 'hsl(0, 0%, 100%)',
        'main-bg-color': '#0A0C1B',
        'card-bg-color': '#1C1938',
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'slightly-transparent-white-75': 'hsla(0, 0%, 100%, 0.75)',
        'slightly-transparent-white-60': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1024px',
      // => @media (min-width: 1440px) { ... }

      tv: '2560px',
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [require('autoprefixer')],
  variants: {},
}
