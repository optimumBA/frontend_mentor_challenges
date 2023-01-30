module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',

        'primary-100': 'hsl(355, 100%, 74%)',
        'primary-200': 'hsl(356, 100%, 66%)',
        'primary-300': 'hsl(13, 100%, 72%)',
        'primary-400': 'hsl(353, 100%, 62%)',
        'primary-900': 'hsl(208, 49%, 24%)',

        'neutral-100': 'hsl(0, 0%, 100%)',
        'neutral-200': 'hsl(240, 2%, 79%)',
        'neutral-400': 'hsl(207, 13%, 34%)',
        'neutral-500': 'hsl(237, 17%, 21%)',
        'neutral-600': 'hsl(240, 10%, 16%)',
        'neutral-700': 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        primary: ['Ubuntu', 'sans-serif'],
        accent: ['Overpass', 'sans-serif'],
      },
      screens: {
        sm: '447px',
        md: '700px',
      },
    },
  },
  plugins: [],
  variants: {},
}
