const theme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    fontFamily: {
      sans: ["Fira Sans", ...theme.fontFamily.sans]
    },
    extend: {
      colors: {
        blue: {
          "01": "var(--color-blue-01)",
          "02": "var(--color-blue-02)"
        },
        red: {
          "01": "var(--color-red-01)",
          "02": "var(--color-red-02)"
        }
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)"
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)"
      },
      placeholderColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)"
      },
      borderColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)"
      }
    }
  }
}
