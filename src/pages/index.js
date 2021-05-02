import React from "react"
import Head from "next/head"
import { Date, RichText as PrismicText } from "prismic-reactjs"
import { linkResolver } from "utils/link-resolver"
import { Stack } from "@chakra-ui/react"

import Layout from "components/layout"
import SiteTitle from "components/site-title"
import BlogPostTeaser from "components/blog-post-teaser"
import { getHomepageData } from "lib/api"

const Index = ({ data }) => {
  const posts = data.allBlog_posts.edges
  const doc = data.allHomepages.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout>
      <Head>
        <title>
          Association Enseignant⋅e⋅s d'Arts Visuels du canton de Vaud
        </title>
      </Head>
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

export async function getStaticProps() {
  const data = await getHomepageData()

  return {
    props: { data },
    revalidate: 1,
  }
}

export default Index
