import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
kirkhamTheme.overrideThemeStyles = () => ({
  a: {
    color: "#355834",
  },
})

const typography = new Typography(kirkhamTheme)

export const { scale, rhythm, options } = typography

export default typography
