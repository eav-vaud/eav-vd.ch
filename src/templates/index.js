import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Heading, Stack } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const post = data.markdownRemark
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <Stack spacing={8}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Box as="article" key={node.fields.slug}>
                <header>
                  <Heading as="h3">
                    <Link to={node.fields.slug}>{title}</Link>
                  </Heading>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </Box>
            )
          })}
        </Stack>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
