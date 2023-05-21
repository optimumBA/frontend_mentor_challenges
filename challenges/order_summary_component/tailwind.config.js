module.exports = {
  content: ['./challenges/order_summary_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image-lg': "url('images/pattern-background-desktop.svg')",
        'custom-image-sm': "url('images/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
