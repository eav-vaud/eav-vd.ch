import React from "react"
import { graphql } from "gatsby"
import { RichText as PrismicText } from "prismic-reactjs"
import { Box, Heading, Text, Link, List, ListItem, Icon } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"

const Resources = ({ data }) => {
  const doc = data.prismic.allResources_pages.edges.slice(0, 1).pop()
  const files = doc.node.files
  const links = doc.node.links
  if (!doc) return null

  return (
    <Layout>
      <SEO title={PrismicText.asText(doc.node.title)} />
      <PageHeader title={PrismicText.asText(doc.node.title)} />
      {doc.node.body && (
        <RichText mt="16">{PrismicText.render(doc.node.body)}</RichText>
      )}
      {files && (
        <Box as="section" mt="12">
          <Heading as="h2" fontSize="4xl">
            Documents
          </Heading>
          <List spacing={8} display="flex" flexDirection="column" mt="8">
            {files.map((file, index) => (
              <ListItem
                key={index}
                display="inline-flex"
                fontSize="3xl"
                alignItems="baseline"
              >
                <Icon
                  name="attachment"
                  flexShrink="0"
                  position="relative"
                  top="1"
                  mr="4"
                  color="gray.400"
                />
                <Link
                  href={file.file_link.url}
                  fontWeight="medium"
                  color="brand"
                >
                  {PrismicText.asText(file.file_title)}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {links && (
        <Box as="section" mt="12">
          <Heading as="h2" fontSize="4xl">
            Liens
          </Heading>
          <List spacing={8} display="flex" flexDirection="column" mt="8">
            {links.map((link, index) => (
              <ListItem
                key={index}
                display="inline-flex"
                fontSize="3xl"
                alignItems="baseline"
              >
                <Icon
                  name="external-link"
                  flexShrink="0"
                  position="relative"
                  top="1"
                  mr="4"
                  color="gray.400"
                />
                <div>
                  <Link
                    href={link.link_url.url}
                    fontWeight="medium"
                    color="brand"
                  >
                    {PrismicText.asText(link.link_title)}
                  </Link>
                  {link.link_description && (
                    <Text fontSize="2xl">
                      {PrismicText.asText(link.link_description)}
                    </Text>
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Layout>
  )
}

export default Resources

export const pageQuery = graphql`
  query ResourcesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    prismic {
      allResources_pages {
        edges {
          node {
            body
            title
            files {
              file_link {
                ... on PRISMIC__FileLink {
                  url
                }
                ... on PRISMIC__ImageLink {
                  url
                }
              }
              file_title
            }
            links {
              link_title
              link_url {
                ... on PRISMIC__ExternalLink {
                  url
                }
                ... on PRISMIC__FileLink {
                  url
                }
                ... on PRISMIC__ImageLink {
                  url
                }
              }
              link_description
            }
          }
        }
      }
    }
  }
`
