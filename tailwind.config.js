const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    uniformColorPalette: true
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
    defaultLineHeights: true
  },
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx"
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono]
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        gray: {
          '100': '#B8BFCE',
          '200': '#AFB6C4',
          '300': '#A5ACBA',
          '400': '#9299A6',
          '500': '#6B727D',
          '600': '#444C55',
          '700': '#313941',
          '800': '#272F37',
          '900': '#1D252C',
        }
      },
      boxShadow: {
        outline: '0 0 0 3px #1C64F2'
      }
    }
  }
}