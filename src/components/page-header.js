import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"

const PageHeader = ({ title, date }) => (
  <Box as="header" mb="6">
    <Heading as="h1">{title}</Heading>
    {date && <Text as="p" mt="2">{date}</Text>}
  </Box>
)

export default PageHeader
