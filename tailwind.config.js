module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'brown': '#6F2D01',
        'green': '#648767ff',
        'yellow': '#ead94cff',
        'bg': '#343633ff',
        'red': '#d5573bff',
        'blue': '#777da7ff',
        

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
