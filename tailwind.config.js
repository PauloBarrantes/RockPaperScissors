/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    fontFamily: {
      sans: ['"Barlow Condensed"'],
      'display': ['"Barlow Condensed"'],
      'body': ['"Barlow Condensed"']
    },
    extend: {
      colors: {
        scissors: {default: '#eaa61d', hover: '#c66d1d'} ,
        spock: {default: '#4ebed3', hover: '#2d8fac'} ,
        paper: {default: '#5470f5', hover: '#2c45ba'} ,
        lizard: {default: '#8c5be0', hover: '#5e34a9'} ,
        rock: {default: '#e0405e', hover: '#9d1532'} ,

      }
    
    }
  },
  plugins: [],
}

