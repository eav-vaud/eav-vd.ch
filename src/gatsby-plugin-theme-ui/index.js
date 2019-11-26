// example theme with Typography.js
import { toTheme } from "@theme-ui/typography"
import parnassus from "typography-theme-parnassus"
import merge from "lodash.merge"

parnassus.baseFontSize = "20px"

const typography = toTheme(parnassus)

export default merge(typography, {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#371f75",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      a: {
        color: `primary`,
      },
    },
  },
})
