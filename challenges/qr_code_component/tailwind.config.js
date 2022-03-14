module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        lightgray: '#D6E2F0',
        grayishgray: '#7B879D',
        darkblue: '#1f3251',
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        fontFamily: {
          Outfit: ['Outfit'],
        },
        screens: {
          sm: '375px',
          // => @media (min-width: 640px) { ... }

          lg: '1440px',
          // => @media (min-width: 1024px) { ... }
        },
      },
    },
  },
  plugins: [],
  variants: {},
}
