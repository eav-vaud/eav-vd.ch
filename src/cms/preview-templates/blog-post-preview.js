import React from "react"

import BlogPostTemplate from "../../templates/blog-post"

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title={entry.getIn([`data`, `title`])}
    description={entry.getIn([`data`, `description`])}
    date="15 décembre 2019"
    content={widgetFor(`body`)}
  />
)

export default BlogPostPreview
