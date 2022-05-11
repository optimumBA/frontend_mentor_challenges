module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        white: '	#ffffff',
        'Light-gray': '	#d6e2f0',
        'g-blue': '#7b879d',
        'dark-blue': '#1f3251',
      },
      fontSize: {
        sm: '15px',
      },
      screens: {
        mobile: '640px',
        // => @media (min-width: 640px) { ... }

        desktop: '1280px',
      },
    },
  },
  plugins: [],
  variants: {},
}
