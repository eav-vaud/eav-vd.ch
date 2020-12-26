import { Date, RichText as PrismicText } from "prismic-reactjs"
import React from "react"
import Layout from "../../components/layout"
import PageHeader from "../../components/page-header"
import RichText from "../../components/rich-text"
import { getPostData, getAllPostsWithSlug } from "../../lib/api"

export const BlogPostTemplate = ({ title, description, date, content }) => (
  <Layout>
    <article>
      <PageHeader title={title} subtitle={date} />
      <RichText mt={[8, 16]}>{content}</RichText>
    </article>
  </Layout>
)

const BlogPost = ({ data }) => {
  const doc = data.allBlog_posts.edges.slice(0, 1).pop()
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

export async function getStaticProps() {
  const data = await getPostData()
  return {
    props: { data },
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

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()
//   return {
//     paths: allPosts?.map(({ node }) => `/posts/${node._meta.uid}`) || [],
//     fallback: true,
//   }
// }

export default BlogPost
