import React from "react"
import PropTypes from "prop-types"
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby"
import { RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from '../utils/link-resolver'
import { Link, Box, Stack } from "@chakra-ui/core"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { style: { textDecoration: `underline` } } : null
}

const NavLink = ({ children, ...props }) => (
  <GatsbyLink getProps={isActive} {...props}>
    {children}
  </GatsbyLink>
)

const Header = ({ title, ...props }) => {
  return (
    <Box
      as="header"
      display={{ md: "flex" }}
      pt="12"
      pb={[8, 24]}
      justifyContent="space-between"
      alignItems="baseline"
      {...props}
    >
      <Link
        as={GatsbyLink}
        to={`/`}
        color="brand"
        fontSize="3xl"
        fontWeight="800"
      >
        {title}
      </Link>
      <StaticQuery
        query={siteQuery}
        render={data => {
          const doc = data.prismic.allMenus.edges.slice(0, 1).pop()
          const navlinks = doc.node.navlinks
          if (!doc) return null

          return (
            <Stack
              as="nav"
              isInline
              spacing={8}
              flexWrap="wrap"
              mt={{ base: 2, md: 0 }}
              ml={{ md: 8 }}
            >
              {navlinks.map(navlink => (
                <Link
                  as={NavLink}
                  key={navlink.navlink_url._meta.id}
                  to={linkResolver(navlink.navlink_url._meta)}
                  fontSize="3xl"
                  fontWeight="bold"
                >
                  {PrismicText.asText(navlink.navlink_label)}
                </Link>
              ))}
            </Stack>
          )
        }}
      />
    </Box>
  )
}

export const siteQuery = graphql`
  query SiteQuery {
    prismic {
      allMenus {
        edges {
          node {
            navlinks {
              navlink_label
              navlink_url {
                ... on PRISMIC_Page {
                  _meta {
                    uid
                    type
                    id
                  }
                }
                ... on PRISMIC_Resources_page {
                  _meta {
                    uid
                    type
                    id
                  }
                }
                ... on PRISMIC_News_page {
                  _meta {
                    uid
                    type
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
