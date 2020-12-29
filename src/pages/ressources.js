import React from "react"
import { RichText as PrismicText } from "prismic-reactjs"
import { Box, Heading, Text, Link, List, ListItem, Icon } from "@chakra-ui/core"

import Layout from "components/layout"
import PageHeader from "components/page-header"
import RichText from "components/rich-text"
import { getResourcesData } from "lib/api"

const Resources = ({ data }) => {
  const doc = data.allResources_pages.edges.slice(0, 1).pop()
  const files = doc.node.files
  const links = doc.node.links
  if (!doc) return null

  return (
    <Layout>
      <PageHeader title={PrismicText.asText(doc.node.title)} />
      {doc.node.body && (
        <RichText mt={[3, 16]}>{PrismicText.render(doc.node.body)}</RichText>
      )}
      {files && (
        <Box as="section" mt={[8, 12]}>
          <Heading as="h2" fontSize={["2xl", "4xl"]}>
            Documents
          </Heading>
          <List
            spacing={[4, 8]}
            display="flex"
            flexDirection="column"
            mt={[4, 8]}
          >
            {files.map((file, index) => (
              <ListItem
                key={index}
                display="inline-flex"
                fontSize={["xl", "3xl"]}
                alignItems="baseline"
              >
                <Icon
                  name="attachment"
                  flexShrink="0"
                  position="relative"
                  top="1"
                  mr="4"
                  color="gray.400"
                />
                <Link
                  href={file.file_link.url}
                  fontWeight="medium"
                  color="brand"
                >
                  {PrismicText.asText(file.file_title)}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {links && (
        <Box as="section" mt={[8, 12]}>
          <Heading as="h2" fontSize={["2xl", "4xl"]}>
            Liens
          </Heading>
          <List
            spacing={[4, 8]}
            display="flex"
            flexDirection="column"
            mt={[4, 8]}
          >
            {links.map((link, index) => (
              <ListItem
                key={index}
                display="inline-flex"
                fontSize={["xl", "3xl"]}
                lineHeight="short"
                alignItems="baseline"
              >
                <Icon
                  name="external-link"
                  flexShrink="0"
                  position="relative"
                  top="1"
                  mr="4"
                  color="gray.400"
                />
                <div>
                  <Link
                    href={link.link_url.url}
                    fontWeight="medium"
                    color="brand"
                  >
                    {PrismicText.asText(link.link_title)}
                  </Link>
                  {link.link_description && (
                    <Text mt="1" fontSize={["lg", "2xl"]}>
                      {PrismicText.asText(link.link_description)}
                    </Text>
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getResourcesData()

  return {
    props: { data },
    revalidate: 1,
  }
}

export default Resources
