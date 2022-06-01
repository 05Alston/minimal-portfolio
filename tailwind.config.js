module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    extend: {
      fontSize:{
        '5.5xl':'3.2rem'
      },
      colors:{
      'nord-0':'#2E3440',
      'nord-1':'#3B4252',
      'nord-2':'#434C5E',
      'nord-3':'#ECEFF4',
      'nord-4':'#8FBCBB',
      'nord-5':'#81A1C1',
      'nord-6':'#E8C888',
      'transparent':'#00000000'
      },
      fontFamily: {
        sans: ['Amiko', 'sans-serif'],
        cursive: ['Grand Hotel', 'cursive'],
      },
    }
  },
  plugins: [],
}
