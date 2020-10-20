const defaultTheme = require("tailwindcss/defaultTheme")

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
  purge: {
    mode: "all",
    content: ["src/**/*.js"],
    options: {
      keyframes: true
    }
  },
  theme: {
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono]
    },
    container: {
      center: true,
      padding: "2rem"
    }
  }
}