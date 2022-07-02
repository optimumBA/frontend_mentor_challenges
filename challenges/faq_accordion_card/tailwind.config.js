module.exports = {
  content: ['./challenges/faq_accordion_card/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      },
      backgroundPosition: {
        'left-top': 'top 1rem left -2rem',
      },
      fontFamily: {
        'Kumbh Sans': ['Kumbh Sans'],
      },
      screens: {
        desktop: '1200px',
        mobile: { min: '370px', max: '700px' },
      },
    },
  },
  plugins: [],
  variants: {},
}
