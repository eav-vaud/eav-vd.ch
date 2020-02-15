import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from '../utils/link-resolver'
import { Box, Stack, Link } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from "../components/rich-text"
import PageHeader from "../components/page-header"
import BlogPostTeaser from "../components/blog-post-teaser"

const IndexTemplate = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  const posts = data.prismic.allBlog_posts.edges

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <PageHeader title={post.frontmatter.title} />
      <Box as="section">
        <RichText content={post.html} mt="4" mb="2" />
        <Link
          as={GatsbyLink}
          to="/apropos"
          fontSize="xl"
          fontWeight="semibold"
          color="brand"
        >
          En savoir plus...
        </Link>
      </Box>
      <Stack spacing={12} mt="12">
        {posts.map(({ node }) => (
          <BlogPostTeaser
            key={node._meta.id}
            slug={linkResolver(node._meta)}
            title={PrismicText.asText(node.title)}
            date={node.date}
          />
        ))}
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
    prismic {
      allBlog_posts {
        edges {
          node {
            title
            date
            _meta {
              id
              uid
              type
            }
          }
        }
      }
    }
  }
`
