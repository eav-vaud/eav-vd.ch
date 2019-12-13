import React from "react"
import { graphql } from "gatsby"
import { Box, Link, List, ListItem, Icon } from "@chakra-ui/core"

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
      <RichText content={post.html} mt="8" />
      <Box as="section" mt="8">
        <List spacing={8}>
          {post.frontmatter.files.map((file, index) => (
            <ListItem key={index}>
              <Link
                href={file.path}
                display="inline-flex"
                alignItems="baseline"
                fontSize="2xl"
                color="brand"
              >
                <Icon
                  name="attachment"
                  flexShrink="0"
                  position="relative"
                  top="1"
                  mr="3"
                  color="gray.300"
                />
                {file.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
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
      }
    }
  }
`
