import React from "react"

import { BlogPostTemplate } from "../../templates/blog-post"

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title="test title"
    description="test description"
    date="test date"
    content="test content"
  />
)

export default BlogPostPreview
