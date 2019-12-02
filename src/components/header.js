import React from "react"
import GatsbyLink from "gatsby-link"
import { Link, Box, Stack } from "@chakra-ui/core"

class Header extends React.Component {
  render() {
    const { title } = this.props

    return (
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
    )
  }
}

export default Header
