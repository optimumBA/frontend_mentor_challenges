const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          'lite-red': '#ff525d',
          'vlite-red': '#ff7a85',
          'vdark-blue': '#1f3f5b',
        },
        neutral: {
          'grayish-blue': '#c8c8cb',
          'vdark-grayish-blue': '#4b5862',
          'vdark-black-blue': '#25252d',
        },
        gradient: {
          intro: {
            'vl-red': '#ff8f70',
            'lite-red': '#ff3d54',
          },
          body: {
            'vdark-gray-blue': '#2c2d3f',
            'vdark-desat-blue': '#3f4164',
            'bg-menu': '#efeff1',
          },
        },
      },
      fontFamily: {
        overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  variants: {},
}
