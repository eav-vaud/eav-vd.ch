import React from "react"
import { graphql } from "gatsby"
import { RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from '../utils/link-resolver'
import { Stack } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import BlogPostTeaser from "../components/blog-post-teaser"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.prismic.allBlog_posts.edges

  return (
    <Layout title={siteTitle}>
      <SEO title="Actualités" />
      <PageHeader title="Actualités" />
      <Stack spacing={16} mt="8">
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
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
