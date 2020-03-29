/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { useTheme } from "emotion-theming"
import { Box } from "@chakra-ui/core"

const RichText = ({ children, ...props }) => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints

  const mq = breakpoints.map(bp => `@media (min-width: ${bp})`)

  return (
    <Box
      css={{
        fontSize: theme.fontSizes[`xl`],
        [mq[0]]: {
          fontSize: theme.fontSizes[`3xl`],
        },
        "> * + *": {
          marginTop: `1.5em`,
        },
        a: {
          color: theme.colors.brand,
          textDecoration: `underline`,
        },
        h1: {
          fontSize: theme.fontSizes[`4xl`],
          [mq[0]]: {
            fontSize: theme.fontSizes[`6xl`],
          },
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights.shorter,
        },
        h2: {
          fontSize: theme.fontSizes[`3xl`],
          [mq[0]]: {
            fontSize: theme.fontSizes[`5xl`],
          },
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights.shorter,
        },
        h3: {
          fontSize: theme.fontSizes[`2xl`],
          [mq[0]]: {
            fontSize: theme.fontSizes[`4xl`],
          },
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights.shorter,
        },
        h4: {
          fontWeight: theme.fontWeights.bold,
        },
        ul: {
          paddingLeft: `1em`,
        },
        ol: {
          paddingLeft: `1em`,
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

RichText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RichText
