module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        f8: '#f8f8f8',
        fc: '1px solid rgba(204, 204, 204, 0.26)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
