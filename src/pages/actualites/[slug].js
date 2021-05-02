import { Date, RichText as PrismicText } from 'prismic-reactjs'
import React from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import RichText from 'components/rich-text'
import { getPostData, getAllPostsWithSlug } from 'lib/api'

export const BlogPostTemplate = ({ title, date, content }) => (
  <Layout>
    <Head>
      <title>{title} | EAV Vaud</title>
    </Head>
    <article>
      <PageHeader title={title} subtitle={date} />
      <RichText mt={[8, 16]}>{content}</RichText>
    </article>
  </Layout>
)

const BlogPost = ({ data }) => {
  const doc = data.allBlog_posts.edges.slice(0, 1).pop()
  if (!doc) return null

  const formattedDate = Intl.DateTimeFormat('fr-CH', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
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

export async function getStaticProps({ params }) {
  const { slug } = params
  const data = await getPostData(slug)
  return {
    props: { data },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  const paths = allPosts.map(({ node }) => ({
    params: { slug: node._meta.uid },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default BlogPost
