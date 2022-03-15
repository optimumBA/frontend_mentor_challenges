module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      colors: {
        verydarkblue: '#090b1a',
        darkdesaturedblue: '#1b1938',
        softviolet: '#aa5cdb',
        white: '#ffffff',
        slightlytrwhite75: '#ffffffbf',
        slightlytrwhite65: '#ffffff99',
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },

      fontFamily: {
        Inter: ['Inter'],
        LexendDeca: ['Lexend Deca'],
      },
      backgroundImage: {
        mobile: 'url(./images/image-header-mobile.jpg)',
        desktop: 'url(../images/image-header-desktop.jpg)',
      },
      screens: {
        sm: '375px',
        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1440px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
}
