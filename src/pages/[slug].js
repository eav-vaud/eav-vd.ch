import React from "react"
import { RichText as PrismicText } from "prismic-reactjs"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import RichText from "../components/rich-text"

const PageTemplate = ({ data }) => {
  const doc = data.prismic.allPages.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout>
      {/* <SEO title={PrismicText.asText(doc.node.title)} /> */}
      <PageHeader title={PrismicText.asText(doc.node.title)} />
      <RichText mt={[3, 16]}>{PrismicText.render(doc.node.page_body)}</RichText>
    </Layout>
  )
}

export default PageTemplate

// export const pageQuery = graphql`
//   query PageQuery($uid: String) {
//     prismic {
//       allPages(uid: $uid) {
//         edges {
//           node {
//             title
//             page_body
//           }
//         }
//       }
//     }
//   }
// `
