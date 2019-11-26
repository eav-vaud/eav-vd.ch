// example theme with Typography.js
import { toTheme } from "@theme-ui/typography"
import parnassus from "typography-theme-parnassus"
import merge from "lodash.merge"

parnassus.baseFontSize = "20px"

const typography = toTheme(parnassus)

export default merge(typography, {
  styles: {
    root: {
      a: {
        color: `#000`,
      },
    },
  },
})
