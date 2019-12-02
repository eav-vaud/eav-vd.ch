import React from "react"
import { ThemeProvider } from "@chakra-ui/core"
import eavTheme from "../utils/theme.js"
import { Box, Flex } from "@chakra-ui/core"

import Header from "./header.js"

const Layout = ({ title, children }) => (
  <ThemeProvider theme={eavTheme}>
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
  </ThemeProvider>
)

export default Layout
