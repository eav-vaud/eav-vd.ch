import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <Box as="header" mb="6">
          <Heading as="h1">{post.frontmatter.title}</Heading>
        </Box>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
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
