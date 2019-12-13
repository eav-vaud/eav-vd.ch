import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Text, Link, List, ListItem, Icon } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"

const ResourcesTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <PageHeader title={post.frontmatter.title} />
      {post.html && <RichText content={post.html} mt="8" />}
      {post.frontmatter.files && (
        <Box as="section" mt="8">
          <Heading as="h2" fontSize="2xl">
            Documents
          </Heading>
          <List spacing={4} display="flex" flexDirection="column" mt="4">
            {post.frontmatter.files.map((file, index) => (
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
                <Link href={file.path} color="brand">
                  {file.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {post.frontmatter.links && (
        <Box as="section" mt="8">
          <Heading as="h2" fontSize="2xl">
            Liens
          </Heading>
          <List spacing={6} display="flex" flexDirection="column" mt="4">
            {post.frontmatter.links.map((link, index) => (
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
                  <Link href={link.url} color="brand">
                    {link.name}
                  </Link>
                  {link.description && (
                    <Text fontSize="lg">{link.description}</Text>
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

export default ResourcesTemplate

export const pageQuery = graphql`
  query ResourcesPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        files {
          name
          path
        }
        links {
          name
          url
          description
        }
      }
    }
  }
`
