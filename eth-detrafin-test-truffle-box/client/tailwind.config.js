module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary: {
        DEFAULT: '#01FCD3',
        dark: '#01DBB7',
      },
      background: '#00372D',
      secondary: {
        DEFAULT: '#DB3E00',
        dark: '#8F2800',
      },

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
