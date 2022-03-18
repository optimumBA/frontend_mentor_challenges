module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        white: 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      screens: {
        sm: '375px',
        // => @media (min-width: 576px) { ... }

        md: '960px',
        // => @media (min-width: 960px) { ... }

        lg: '1440px',
        // => @media (min-width: 1440px) { ... }

        tv: '2560px',
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
  variants: {},
}
