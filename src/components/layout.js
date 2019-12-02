import React from "react"
import { Box, Flex } from "@chakra-ui/core"

import Header from "./header.js"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Flex maxW="720px" minH="100vh" direction="column" px="4" mx="auto">
        <Header title={title} />
        <Box as="main" flexGrow="1">
          {children}
        </Box>
        <Box as="footer" py="6">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Box>
      </Flex>
    )
  }
}

export default Layout
