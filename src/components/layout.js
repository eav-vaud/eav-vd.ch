import React from "react"
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

export default Layout
