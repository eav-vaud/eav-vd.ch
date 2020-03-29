import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, Text } from "@chakra-ui/core"

const PageHeader = ({ title, subtitle, ...props }) => (
  <Box as="header" {...props}>
    <Heading as="h1" fontSize={["4xl", "6xl"]} maxWidth={["auto", "20ch"]}>
      {title}
    </Heading>
    {subtitle && (
      <Text
        as="p"
        mt={[1, 2]}
        fontSize={["xl", "3xl"]}
        fontWeight="medium"
        color="gray.600"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {subtitle}
      </Text>
    )}
  </Box>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default PageHeader
