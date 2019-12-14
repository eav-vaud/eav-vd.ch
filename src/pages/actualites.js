import React from "react"
import { graphql } from "gatsby"
import { Stack } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import BlogPostTeaser from "../components/blog-post-teaser"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <SEO title="Actualités" />
      <PageHeader title="Actualités" />
      <Stack spacing={16} mt="8">
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
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
