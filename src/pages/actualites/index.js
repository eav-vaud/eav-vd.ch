import React from "react"
import Head from "next/head"
import { Date, RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from "utils/link-resolver"
import { Stack } from "@chakra-ui/core"

import Layout from "components/layout"
import PageHeader from "components/page-header"
import RichText from "components/rich-text"
import BlogPostTeaser from "components/blog-post-teaser"
import { getNewsData } from "lib/api"

const BlogIndex = ({ data }) => {
  const posts = data.allBlog_posts.edges
  const doc = data.allNews_pages.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout>
      <Head>
        <title>Actualités | EAV Vaud</title>
      </Head>
      <PageHeader title={PrismicText.asText(doc.node.title)} />
      {doc.node.body && (
        <RichText mt={[3, 16]}>{PrismicText.render(doc.node.body)}</RichText>
      )}
      <Stack spacing={[16, 20]} mt={[8, 12]}>
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

export async function getStaticProps() {
  const data = await getNewsData()

  return {
    props: { data },
    revalidate: 1,
  }
}

export default BlogIndex
