import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@chakra-ui/core"
import eavTheme from "../utils/theme"
import { Box } from "@chakra-ui/core"

import Header from "./header.js"

const Layout = ({ title, children }) => (
  <ThemeProvider theme={eavTheme}>
    <Box maxW="720px" px="4" mx="auto">
      <Header title={title} />
      <main>
        {children}
      </main>
    </Box>
  </ThemeProvider>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
