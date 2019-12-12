import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, Text } from "@chakra-ui/core"

const PageHeader = ({ title, date }) => (
  <Box as="header" mb="6">
    <Heading as="h1">{title}</Heading>
    {date && (
      <Text as="p" mt="2">
        {date}
      </Text>
    )}
  </Box>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default PageHeader
