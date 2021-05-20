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
        <p>
          Merci pour votre intérêt et inscription. Vous faites maintenant partie
          de l’EAV !
        </p>
        <p>
          Vous avez également été ajouté⋅e à la mailing liste et recevrez
          dorénavant les informations concernant les activités de l'EAV par
          e-mail. Nous vous contacterons prochainement avec les informations
          pour le versement de la cotisation annuelle.
        </p>
      </RichText>
    </Layout>
  )
}

export default Success
