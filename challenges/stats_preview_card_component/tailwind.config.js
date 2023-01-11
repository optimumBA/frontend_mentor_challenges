module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        white: 'hsl(0, 0%, 100%)',
        'transparent-white-main': 'hsla(0, 0%, 100%, 0.75)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.6)',
      },
      text: {
        base: '15px',
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        titles: ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: {},
}
