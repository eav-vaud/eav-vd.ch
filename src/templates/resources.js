import React from "react"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"

const ResourcesTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <PageHeader title={post.frontmatter.title} />
      <RichText content={post.html} mt="8" />
      <Box as="section" mt="8">
        <ul>
          {post.frontmatter.files.map((file, index) => (
            <li key={index}>
              <a href={file.path}>{file.name}</a>
            </li>
          ))}
        </ul>
      </Box>
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
