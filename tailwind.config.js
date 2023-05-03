/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
          darkColor:'#001129',
          darkColorLight:"#00193D",
          shadowColor:"#0A0A0A",
          lightColor:"#F3F3F3",
          lightColorDarker:"#D9D9D9"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        "xMove":{
          from: { opacity:0, transform:"translateX(-15px)"},
          to: { opacity:1, transform:"none" },
        },
        "yMove":{
          from:{ opacity:0, transform:"translateY(-10px)"},
          to: { opacity:1, transform:"none" },
        }
      },
      animation:{
        "xMove":" xMove 1000ms var(--animationDelay, 0ms) ease forwards ",
        "yMove":" yMove 1000ms var(--animationDelay, 0ms) ease forwards "
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
