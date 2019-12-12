import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Text, Link } from "@chakra-ui/core"

const BlogPostTeaser = ({ slug, title, date, description, ...props }) => (
  <Box as="article" {...props}>
    <Box as="header">
      <Heading as="h3" fontSize="2xl">
        <Link as={GatsbyLink} to={slug}>
          {title}
        </Link>
      </Heading>
      <Text fontSize="md">{date}</Text>
    </Box>
    <Box as="section" mt="3">
      <Text
        fontSize="lg"
        mb="2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link
        as={GatsbyLink}
        to={slug}
        fontSize="lg"
        fontWeight="semibold"
        color="brand"
      >
        En lire plus...
      </Link>
    </Box>
  </Box>
)

export default BlogPostTeaser
