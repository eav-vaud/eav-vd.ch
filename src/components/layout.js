import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@chakra-ui/core"
import eavTheme from "../utils/theme"
import { Grid, Box } from "@chakra-ui/core"
import 'typeface-fira-sans'

import Header from "./header.js"

const Layout = ({ title, children }) => (
  <ThemeProvider theme={eavTheme}>
    <Grid
      fontFamily="body"
      templateColumns="minmax(1rem, 1fr) minmax(auto, 60em) minmax(1rem, 1fr)"
      pb="48"
    >
      <Box as={Header} gridColumn="2" title={title} />
      <Box as="main" gridColumn="2">{children}</Box>
    </Grid>
  </ThemeProvider>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
