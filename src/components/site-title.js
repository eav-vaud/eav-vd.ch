import React from "react"
import { Box, Heading } from "@chakra-ui/core"

const SiteTitle = () => (
  <Heading
    as="h1"
    color="brand"
    textTransform="uppercase"
    letterSpacing="wider"
  >
    <Box fontSize={["xl", "3xl", "4xl", "5xl"]}>Association</Box>
    <Box
      fontSize={["3xl", "5xl", "88px", "112px"]}
      my={[1, 2]}
      lineHeight="none"
    >
      Enseignant⋅e⋅s d'Arts Visuels
    </Box>
    <Box fontSize={["xl", "3xl", "4xl", "5xl"]}>du canton de Vaud</Box>
    <Box bg="brand" width={[12, 20]} height={[4, 6]} mt={[8, 16]} />
  </Heading>
)

export default SiteTitle
