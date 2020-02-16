import React from "react"
import { graphql } from "gatsby"
import { Date, RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from "../utils/link-resolver"
import { Stack } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"
import BlogPostTeaser from "../components/blog-post-teaser"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.prismic.allBlog_posts.edges
  const doc = data.prismic.allNews_pages.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout title={siteTitle}>
      <SEO title={PrismicText.asText(doc.node.title)} />
      <PageHeader title={PrismicText.asText(doc.node.title)} />
      {doc.node.body && (
        <RichText mt="8">{PrismicText.render(doc.node.body)}</RichText>
      )}
      <Stack spacing={16} mt="8">
        {posts.map(({ node }) => {
          const formattedDate = Intl.DateTimeFormat("fr-CH", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(Date(node.date))

          return (
            <BlogPostTeaser
              key={node._meta.id}
              slug={linkResolver(node._meta)}
              title={PrismicText.asText(node.title)}
              date={formattedDate}
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
    prismic {
      allNews_pages(uid: "actualites") {
        edges {
          node {
            title
            body
          }
        }
      }
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
