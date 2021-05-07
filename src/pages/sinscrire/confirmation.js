import React from 'react'
import Head from 'next/head'

import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import { CheckCircleIcon } from '@chakra-ui/icons'
import RichText from 'components/rich-text'
import { Stack } from '@chakra-ui/react'

const Success = () => {
  return (
    <Layout>
      <Head>
        <title>Confirmation | EAV Vaud</title>
      </Head>
      <Stack direction={['column', 'row']} spacing="4">
        <CheckCircleIcon w="16" h="16" color="brand" />
        <PageHeader title="Formulaire envoyé" />
      </Stack>

      <RichText mt={[3, 16]}>
        <p>Texte de confirmation qui explique les prochaines étapes</p>
      </RichText>
    </Layout>
  )
}

export default Success
