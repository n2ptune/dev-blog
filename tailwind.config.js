module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: true,
  theme: {
    // fontFamily: {
    //   mono: ['Hack', 'D2Coding', 'monospace'],
    //   display: [
    //     '-apple-system',
    //     'BlinkMacSystemFont',
    //     '"Noto Sans"',
    //     '"NanumBarunGothic"',
    //     'sans-serif'
    //   ]
    // },
    extend: {
      fontFamily: {
        mono: ['Hack', 'D2Coding', 'monospace'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Noto Sans"',
          '"NanumBarunGothic"',
          'sans-serif'
        ]
      },
      fontSize: {
        xl: '1.3rem'
      },
      screens: {
        '2xl': '1480px'
      },
      colors: {
        /**
         * @colors https://flatuicolors.com/palette/nl
         */
        white: {
          '100': 'rgba(255, 255, 255, 0.1)',
          '200': 'rgba(255, 255, 255, 0.2)',
          '300': 'rgba(255, 255, 255, 0.3)',
          '400': 'rgba(255, 255, 255, 0.4)',
          '500': 'rgba(255, 255, 255, 0.5)',
          '600': 'rgba(255, 255, 255, 0.6)',
          '700': 'rgba(255, 255, 255, 0.7)',
          '800': 'rgba(255, 255, 255, 0.8)',
          '900': 'rgba(255, 255, 255, 0.9)',
          f: 'rgb(255, 255, 255)'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
