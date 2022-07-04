module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '400px',
      },
      fontSize:{
        '5.5xl':'3.2rem'
      },
      colors:{
      'nord-0':'#2E3440',//black
      'nord-1':'#3B4252',//black-gray
      'nord-2':'#434C5E',//gray
      'nord-3':'#ECEFF4',//white-gray
      'nord-4':'#8FBCBB',//greenish
      'nord-5':'#81A1C1',//blue
      'nord-6':'#E8C888',//yellow
      'nord-7':'#BF616A',//red
      'nord-8':'#D08770',//orange
      'transparent':'#00000000'
      },
      fontFamily: {
        sans: ['Amiko', 'sans-serif'],
        cursive: ['Grand Hotel', 'cursive'],
      },
      backgroundImage:{
        'curve1':['url("curve1.svg")'],
        'curve2':['url("curve2.svg")'],
        'curve3':['url("curve3.svg")'],
        'curve4':['url("curve4.svg")'],
        'footer':['url("footer.svg")'],
        'proj1':['url("dots.png")'],
        'proj2':['url("converter.png")'],
        'proj3':['url("register.png")'],
        'proj4':['url("me.jpg")'],
        'proj5':['url("knight.webp")'],
        'proj6':['url("todo.png")'],
        'card-gradient':['linear-gradient(#00000000 0%, #3B4252 90%, #2E3440 100%);'], 
      },
      maxWidth: {
        '500': '500px',
      },
      height: {
        '500': '500px',
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    }
  },
  plugins: [],
}
