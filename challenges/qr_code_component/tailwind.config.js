module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue': '#d6e2f0',
        white: 'hsl(0, 0%, 100%)',
        'text-silver': '#7b879d',
      },
      fontSize: {
        'card-text': '15px',
      },
      fontFamily: {
        outfit: ['Outfit'],
      },
      screens: {
        mobile: '376px',
        tablet: '768px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
  variants: {},
}
