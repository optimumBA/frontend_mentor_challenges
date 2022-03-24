module.exports = {
  content: ['./challenges/profile_card_component/index.html'],
  theme: {
    fontSize: {
      xs: [
        '11px',
        {
          letterSpacing: '2px',
        },
      ],
    },
    extend: {
      colors: {
        darkcyan: '#19a2ae',
        verydarkblue: '#2d3248',
        darkgrayishblue: '#6a6f81',
        darkgray: '#969696',
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },
      fontFamily: {
        'Kumbh-Sans': ['Kumbh+Sans'],
      },
      screens: {
        desktop: '1200px',
        mobile: '370px',
        lg: '1440px',
      },
    },
  },
  plugins: [],
}
