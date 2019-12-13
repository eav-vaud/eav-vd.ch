import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Stack, Link } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from "../components/rich-text"
import PageHeader from "../components/page-header"
import BlogPostTeaser from "../components/blog-post-teaser"

const IndexTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <PageHeader title={post.frontmatter.title} />
      <Box as="section">
        <RichText content={post.html} mt="4" mb="2" />
        <Link
          as={GatsbyLink}
          to="/apropos"
          fontSize="lg"
          fontWeight="semibold"
          color="brand"
        >
          En savoir plus...
        </Link>
      </Box>
      <Stack spacing={12} mt="12">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const description = node.frontmatter.description || node.excerpt
          return (
            <BlogPostTeaser
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              description={description}
            />
          )
        })}
      </Stack>
    </Layout>
  )
}

export default IndexTemplate

export const pageQuery = graphql`
  query IndexPageBySlug($slug: String!) {
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
