/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { useTheme } from "emotion-theming"
import { Box } from "@chakra-ui/core"

const RichText = ({ content, ...props }) => {
  const theme = useTheme()

  return (
    <Box
      css={{
        fontSize: theme.fontSizes.xl,
        "> * + *": {
          marginTop: `1.5em`,
        },
        a: {
          color: theme.colors.brand,
          textDecoration: `underline`,
        },
        h1: {
          fontSize: theme.fontSizes[`4xl`],
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights.shorter,
        },
        h2: {
          fontSize: theme.fontSizes[`3xl`],
          fontWeight: theme.fontWeights.bold,
        },
        h3: {
          fontSize: theme.fontSizes[`2xl`],
          fontWeight: theme.fontWeights.bold,
        },
        h4: {
          fontWeight: theme.fontWeights.bold,
        },
        ul: {
          paddingLeft: `1em`,
        },
      }}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  )
}

RichText.propTypes = {
  content: PropTypes.string.isRequired,
}

export default RichText
