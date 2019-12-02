import React from "react"
import { graphql } from "gatsby"
import { Heading } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <header>
        <Heading as="h1">{post.frontmatter.title}</Heading>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <section>
        <ul>
          {post.frontmatter.files.map((file, index) => (
            <li key={index}>
              <a href={file.path}>{file.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default ResourcesTemplate

export const pageQuery = graphql`
  query ResourcesPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        files {
          name
          path
        }
      }
    }
  }
`
