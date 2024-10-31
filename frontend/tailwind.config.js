import daisyui from 'daisyui';
import daisyUIThemes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'navsm': '1183px',
        'navsm1': '1046px',
        'navLarge':'996px',
        'navSmall':'273px',
        'xs': '480px',       
        '3xl': '1600px',      
        'tall': { 'raw': '(min-height: 900px)' }, 
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      "light",
      {
        black: {
          ...daisyUIThemes['black'],
          primary: "rgb(29, 155, 240)",
					secondary: "rgb(24, 24, 24)",
        }
      }
    ]
  }
}