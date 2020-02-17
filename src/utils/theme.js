import { theme } from "@chakra-ui/core"

const eavTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "Fira Sans, sans-serif",
    heading: "Fira Sans, sans-serif",
  },
  colors: {
    ...theme.colors,
    brand: "#392079",
  },
}

export default eavTheme
