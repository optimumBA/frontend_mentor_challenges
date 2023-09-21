module.exports = {
  content: ['./challenges/faq_accordion_card/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-img-bg': "url('images/bg-pattern-mobile.svg')",
        'desktop-img-bg': "url('images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
