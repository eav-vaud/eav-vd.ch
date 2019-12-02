import React from "react"
import { Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"

const BlogPostTeaser = ({ slug, title, date, description, ...props }) => (
  <Box as="article" {...props}>
    <header>
      <Heading as="h3">
        <Link to={slug}>{title}</Link>
      </Heading>
      <small>{date}</small>
    </header>
    <section>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </section>
  </Box>
)

export default BlogPostTeaser
