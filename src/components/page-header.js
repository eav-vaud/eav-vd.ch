import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, Text } from "@chakra-ui/core"

const PageHeader = ({ title, subtitle, ...props }) => (
  <Box as="header" {...props}>
    <Heading as="h1" fontSize="6xl">
      {title}
    </Heading>
    {subtitle && (
      <Text as="p" mt="2" fontSize="3xl">
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
