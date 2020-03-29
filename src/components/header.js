import React from "react"
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby"
import { RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from "../utils/link-resolver"
import { Link, Box, Stack } from "@chakra-ui/core"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { style: { textDecoration: `underline` } } : null
}

const NavLink = ({ children, ...props }) => (
  <GatsbyLink getProps={isActive} {...props}>
    {children}
  </GatsbyLink>
)

const Header = ({ ...props }) => {
  return (
    <Box
      as="header"
      display={{ md: "flex" }}
      pt={[8, 12]}
      pb={[12, 24]}
      justifyContent="space-between"
      alignItems="baseline"
      {...props}
    >
      <Link as={GatsbyLink} to={`/`} color="brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 408 120"
        >
          <title>EAV Vaud</title>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M95.6737291.6504049v25.4293327H33.7937306v19.1813329h54.7026653v24.750666H33.7937306v21.6573328H97.525729v27.9693327H.78706477V.6504049H95.6737291zM212.530259 66.2928032L195.38626 32.2674708h-.461333l-17.608 33.7226658 17.84 20.4186661 17.373332-20.1159995zm1.608-65.64266497L275.948925 119.638135h-37.734666l-14.294666-29.879999-28.762666 29.879999-29.785333-29.5266657-14.429333 29.5266657h-36.575999L176.867594.65013823h37.270665zM317.127324 119.638669L268.603325.65067156h37.269332l31.858666 78.70799804h.461333L370.515322.65067156h37.499999L358.101989 119.638669h-40.974665z"
          />
        </svg>
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
              mt={[4, 0]}
              ml={{ md: 8 }}
            >
              {navlinks.map(navlink => (
                <Link
                  as={NavLink}
                  key={navlink.navlink_url._meta.id}
                  to={linkResolver(navlink.navlink_url._meta)}
                  fontSize={["xl", "3xl"]}
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

export default Header
