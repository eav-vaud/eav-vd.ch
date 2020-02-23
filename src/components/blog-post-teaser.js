import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Text, Link } from "@chakra-ui/core"

const BlogPostTeaser = ({ slug, title, date, description, ...props }) => (
  <Box as="article" {...props}>
    <Box as="header">
      <Heading as="h3" fontSize="4xl">
        <Link as={GatsbyLink} to={slug}>
          {title}
        </Link>
      </Heading>
      <Text
        mt="1"
        fontSize="2xl"
        fontWeight="medium"
        color="gray.600"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {date}
      </Text>
    </Box>
    <Box as="section" mt="5">
      {description && (
        <Text mb="5" fontSize="3xl">
          {description}…
        </Text>
      )}
      <Link
        as={GatsbyLink}
        to={slug}
        fontSize="3xl"
        fontWeight="semibold"
        color="brand"
      >
        En lire plus
      </Link>
    </Box>
  </Box>
)

BlogPostTeaser.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default BlogPostTeaser
