import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from "../components/rich-text"

const PageTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <Box as="header" mb="6">
        <Heading as="h1">{post.frontmatter.title}</Heading>
      </Box>
      <RichText>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </RichText>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
