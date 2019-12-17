import React from "react"
import PropTypes from "prop-types"
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby"
import { Link, Box, Stack } from "@chakra-ui/core"

const Header = ({ title }) => (
  <Box
    as="header"
    display={{ md: "flex" }}
    pt="8"
    pb={[8, 16]}
    justifyContent="space-between"
    alignItems="baseline"
  >
    <Link as={GatsbyLink} to={`/`} color="brand" fontSize="xl" fontWeight="800">
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
        <Stack
          as="nav"
          isInline
          spacing={4}
          flexWrap="wrap"
          mt={{ base: 2, md: 0 }}
          ml={{ md: 8 }}
        >
          {data.site.siteMetadata.menuLinks.map(link => (
            <Link
              as={GatsbyLink}
              key={link.name}
              to={link.link}
              fontSize="xl"
              fontWeight="bold"
            >
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
