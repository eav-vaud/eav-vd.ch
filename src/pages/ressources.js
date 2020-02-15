import React from "react"
import { graphql } from "gatsby"
import { RichText as PrismicText } from "prismic-reactjs"
import { Box, Heading, Text, Link, List, ListItem, Icon } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"

const Resources = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const doc = data.prismic.allResources_pages.edges.slice(0, 1).pop()
  const files = doc.node.files
  const links = doc.node.links
  if (!doc) return null

  return (
    <Layout title={siteTitle}>
      <SEO title={PrismicText.asText(doc.node.title)} />
      <PageHeader title={PrismicText.asText(doc.node.title)} />
      {doc.node.body && (
        <RichText mt="8">{PrismicText.render(doc.node.body)}</RichText>
      )}
      {files && (
        <Box as="section" mt="8">
          <Heading as="h2" fontSize="2xl">
            Documents
          </Heading>
          <List spacing={4} display="flex" flexDirection="column" mt="4">
            {files.map((file, index) => (
              <ListItem
                key={index}
                display="inline-flex"
                fontSize="xl"
                alignItems="baseline"
              >
                <Icon
                  name="attachment"
                  flexShrink="0"
                  position="relative"
                  top="1"
                  mr="3"
                  color="gray.300"
                />
                <Link href={file.file_link.url} color="brand">
                  {PrismicText.asText(file.file_title)}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {links && (
        <Box as="section" mt="8">
          <Heading as="h2" fontSize="2xl">
            Liens
          </Heading>
          <List spacing={6} display="flex" flexDirection="column" mt="4">
            {links.map((link, index) => (
              <ListItem
                key={index}
                display="inline-flex"
                fontSize="xl"
                alignItems="baseline"
              >
                <Icon
                  name="external-link"
                  flexShrink="0"
                  position="relative"
                  top="1"
                  mr="3"
                  color="gray.300"
                />
                <div>
                  <Link href={link.link_url.url} color="brand">
                    {PrismicText.asText(link.link_title)}
                  </Link>
                  {link.link_description && (
                    <Text fontSize="lg">
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
