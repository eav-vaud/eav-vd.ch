import React from "react"
import { graphql } from "gatsby"
import { Stack } from "@chakra-ui/core"

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
      <RichText content={post.html} mt="4" />
      <Stack spacing={12} mt="8">
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
