import React from "react"
import PropTypes from "prop-types"
import NextLink from "next/link"
import { Box, Heading, Text, Link } from "@chakra-ui/react"

const BlogPostTeaser = ({ slug, title, date, description, ...props }) => (
  <Box as="article" {...props}>
    <Box as="header">
      <Heading as="h3" fontSize={["2xl", "4xl"]}>
        <NextLink href={slug} passHref>
          <a>{title}</a>
        </NextLink>
      </Heading>
      <Text
        mt="1"
        fontSize={["lg", "2xl"]}
        fontWeight="medium"
        color="gray.600"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {date}
      </Text>
    </Box>
    <Box as="section" mt={[3, 5]}>
      {description && (
        <Text mb={[3, 5]} fontSize={["xl", "3xl"]}>
          {description}…
        </Text>
      )}
      <NextLink href={slug} passHref>
        <Link fontSize={["xl", "3xl"]} fontWeight="medium" color="brand">
          Lire la suite ⟶
        </Link>
      </NextLink>
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
