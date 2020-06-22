import React from "react"
import { graphql } from "gatsby"
import { Date, RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from "../utils/link-resolver"
import { Stack } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteTitle from "../components/site-title"
import BlogPostTeaser from "../components/blog-post-teaser"

const Index = ({ data }) => {
  const posts = data.prismic.allBlog_posts.edges
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout>
      <SEO title={PrismicText.asText(doc.node.title)} />
      <SiteTitle />
      <Stack spacing={[16, 20]} mt={[8, 16]}>
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
              description={PrismicText.asText(node.post_body).substring(0, 200)}
              date={formattedDate}
            />
          )
        })}
      </Stack>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query HomepageQuery {
    prismic {
      allHomepages {
        edges {
          node {
            title
            homepage_body
          }
        }
      }
      allBlog_posts {
        edges {
          node {
            title
            date
            post_body
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
