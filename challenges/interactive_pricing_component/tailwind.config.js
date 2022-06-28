module.exports = {
  content: ['./challenges/interactive_pricing_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'soft-cyan': 'hsl(174, 77%, 80%)',
        'strong-cyan': 'hsl(174, 86%, 45%)',
        'light-grayish-red': 'hsl(14, 92%, 95%)',
        'light-red': 'hsl(15, 100%, 70%)',
        'pale-blue': 'hsl(226, 100%, 87%)',
        'very-pale-blue': 'hsl(230, 100%, 99%)',
        'light-grayish-blue': 'hsl(224, 65%, 95%)',
        'light-grayish-blue-2': 'hsl(223, 50%, 87%)',
        'grayish-blue': 'hsl(225, 20%, 60%)',
        'dark-desaturated-blue': 'hsl(227, 35%, 25%)',
      },
      fontFamily: {
        manrope: ['Manrope'],
      },
      screens: {
        desktop: '1200px',
        mobile: { min: '370px', max: '700px' },
        largescreen: '1800px',
      },
    },
  },
  plugins: [],
  variants: {},
}
