import React from 'react'
import Head from 'next/head'

import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import RichText from 'components/rich-text'

const Success = () => {
  return (
    <Layout>
      <Head>
        <title>Succès | EAV Vaud</title>
      </Head>
      <PageHeader title="Succès" />
      <RichText mt={[3, 16]}>
        <p>Succès</p>
      </RichText>
    </Layout>
  )
}

export default Success
