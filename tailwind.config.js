const plugin = require('tailwindcss/plugin')
const typography = require('@tailwindcss/typography')

const childrenPlugin = plugin(({ addVariant, e }) => {
  addVariant('children', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`children${separator}${className}`)} > *`
    })
  })
})

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  purge: ['src/**/*.{js,jsx,ts,tsx,html,css}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-system-ui',
          '-apple-system',
          '"Noto Sans"',
          // '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"'
        ]
      },
      colors: {
        black: {
          primary: {
            10: '#f2f3f9',
            50: '#404040',
            100: '#2A2A2A',
            200: '#1C1C1C',
            300: '#121212',
            400: '#080808',
            500: '#040404'
          }
        }
      }
    }
  },
  variants: {
    extend: {
      display: ['children'],
      textColor: ['children', 'hover'],
      textOpacity: ['children'],
      opacity: ['children'],
      backgroundColor: ['children'],
      transform: ['children'],
      transitionDuration: ['children'],
      transitionProperty: ['children']
    }
  },
  plugins: [childrenPlugin, typography]
}

module.exports = config
