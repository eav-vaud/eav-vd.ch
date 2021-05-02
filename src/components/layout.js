import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Grid, Box } from '@chakra-ui/react'

import Header from 'components/header'

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Grid
      fontFamily="body"
      templateColumns="minmax(1rem, 1fr) minmax(auto, 60em) minmax(1rem, 1fr)"
      pb="48"
    >
      <Box as={Header} gridColumn="2" />
      <Box as="main" gridColumn="2">
        {children}
      </Box>
    </Grid>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
