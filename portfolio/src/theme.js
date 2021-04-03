const color = require('color')

const darkTheme = {
    name: "light",
    primary: "#eceff1",
    primaryDark: "#b0bec5",
    primaryDarker: color("#FFFFFF")
      .darken(0.2)
      .toString(),
    accent: "#404fa6",
    accentDark: color("#404fa6")
      .darken(0.08)
      .toString(),
    accentLight: "#9fa8da",
    text: "#000000",
    textSecondary: color("#000000")
      .alpha(0.7)
      .toString(),
    textInvert: "#FFFFFF",
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  }
  
  module.exports = { darkTheme }
  