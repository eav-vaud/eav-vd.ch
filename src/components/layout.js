import React from "react"
import GatsbyLink from "gatsby-link"
import { Link, Box, Flex, Stack } from "@chakra-ui/core"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Flex maxW="720px" minH="100vh" direction="column" px="4" mx="auto">
        <Box
          as="header"
          display={{ sm: "flex" }}
          py="6"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Link as={GatsbyLink} to={`/`}>
            {title}
          </Link>
          <Stack as="nav" isInline spacing={4} ml="8">
            <Link as={GatsbyLink} to="/actualites">
              Actualités
            </Link>
            <Link as={GatsbyLink} to="/apropos">
              À propos
            </Link>
            <Link as={GatsbyLink} to="/ressources">
              Ressources
            </Link>
            <Link as={GatsbyLink} to="/contact">
              Contact
            </Link>
          </Stack>
        </Box>
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
