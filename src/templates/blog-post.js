import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"

const BlogPostTemplate = ({ title, description, date, content }) => (
  <Layout title="EAV-Vaud">
    <SEO title={title} description={description} />
    <article>
      <PageHeader title={title} subtitle={date} />
      <RichText content={content} mt="8" />
    </article>
  </Layout>
)

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <BlogPostTemplate
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      date={post.frontmatter.date}
      content={post.html}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
