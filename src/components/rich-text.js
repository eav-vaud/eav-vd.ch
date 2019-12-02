/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useTheme } from "emotion-theming"

const RichText = ({ children }) => {
  const theme = useTheme()

  return (
    <article
      css={{
        fontSize: theme.fontSizes.xl,
        a: {
          color: theme.colors.brand,
          textDecoration: "underline",
        },
      }}
    >
      {children}
    </article>
  )
}

export default RichText
