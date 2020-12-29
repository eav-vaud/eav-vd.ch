import React from "react"
import { RichText as PrismicText } from "prismic-reactjs"

import Layout from "components/layout"
import PageHeader from "components/page-header"
import RichText from "components/rich-text"
import { getContactData } from "lib/api"

const Contact = ({ data }) => {
  const doc = data.allPages.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout>
      <PageHeader title={PrismicText.asText(doc.node.title)} />
      <RichText mt={[3, 16]}>{PrismicText.render(doc.node.page_body)}</RichText>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getContactData()

  return {
    props: { data },
    revalidate: 1,
  }
}

export default Contact
