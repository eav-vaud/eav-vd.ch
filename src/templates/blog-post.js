import React from "react"
import { graphql } from "gatsby"
import { Date, RichText as PrismicText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"

export const BlogPostTemplate = ({ title, description, date, content }) => (
  <Layout title="EAV-Vaud">
    <SEO title={title} description={description} />
    <article>
      <PageHeader title={title} subtitle={date} />
      <RichText mt="8">{content}</RichText>
    </article>
  </Layout>
)

const BlogPost = ({ data }) => {
  const doc = data.prismic.allBlog_posts.edges.slice(0, 1).pop()
  if (!doc) return null

  const formattedDate = Intl.DateTimeFormat("fr-CH", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(Date(doc.node.date))

  return (
    <BlogPostTemplate
      title={PrismicText.asText(doc.node.title)}
      description={PrismicText.asText(doc.node.post_body).substring(0, 160)}
      date={formattedDate}
      content={PrismicText.render(doc.node.post_body)}
    />
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismic {
      allBlog_posts(uid: $uid) {
        edges {
          node {
            title
            date
            post_body
          }
        }
      }
    }
  }
`
