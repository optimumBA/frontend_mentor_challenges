module.exports = {
  // content: ['./challenges/profile_card_component/index.html'],
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
      screens: {
        'vsm': '375px',
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif',]
      },
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
  variants: {},
}
