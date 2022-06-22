module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
      },
      fontFamily: {
        body: ['Inter'],
        max: ['Lexend Deca'],
      },
    },
  },
  plugins: [],
  variants: {},
}
