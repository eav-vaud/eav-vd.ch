import React from "react"
import PropTypes from "prop-types"
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby"
import { Link, Box, Stack } from "@chakra-ui/core"

const Header = ({ title }) => (
  <Box
    as="header"
    display={{ sm: "flex" }}
    py="6"
    justifyContent="space-between"
    alignItems="baseline"
  >
    <Link as={GatsbyLink} to={`/`} color="brand" fontWeight="800">
      {title}
    </Link>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <Stack as="nav" isInline spacing={4} ml="8">
          {data.site.siteMetadata.menuLinks.map(link => (
            <Link key={link.name} as={GatsbyLink} to={link.link}>
              {link.name}
            </Link>
          ))}
        </Stack>
      )}
    />
  </Box>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
