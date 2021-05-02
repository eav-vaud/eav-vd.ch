/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import PropTypes from "prop-types"
import { useTheme, Box } from "@chakra-ui/react"

const RichText = ({ children, ...props }) => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints

  const mq = Object.keys(breakpoints).map(
    (key, index) => `@media (min-width: ${breakpoints[key]})`
  )

  return (
    <Box
      css={{
        fontSize: theme.fontSizes[`xl`],
        [mq[1]]: {
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
          [mq[1]]: {
            fontSize: theme.fontSizes[`6xl`],
          },
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights.shorter,
        },
        h2: {
          fontSize: theme.fontSizes[`3xl`],
          [mq[1]]: {
            fontSize: theme.fontSizes[`5xl`],
          },
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights.shorter,
        },
        h3: {
          fontSize: theme.fontSizes[`2xl`],
          [mq[1]]: {
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
