module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'very-dark-blue' : 'hsl(233, 47%, 7%)' /* main background*/ ,
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)' /* card background */,
        'soft-violet' : 'hsl(277, 64%, 61%)' ,
        'white' : 'hsl(0,0%,100%)' ,
        'transp-white-1' : 'hsla(0, 0%, 100%, 0.75)' ,
        'transp-white-2' : 'hsla(0, 0%, 100%, 0.6)',

      },
      fontSize:{
        'text' : '15px',
      },
      fontFamily:{
        inter: ['Inter'],
        lexendDeca: ['Lexend Deca']
      },
      mobile: '376px',
      tablet: '768px',
      desktop: '1440px'
    },
  },
  plugins: [],
  variants: {},
}
