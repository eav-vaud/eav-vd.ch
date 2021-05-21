import React from 'react'
import Head from 'next/head'

import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import RichText from 'components/rich-text'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { Box, Grid, HStack } from '@chakra-ui/layout'
import { Radio, RadioGroup } from '@chakra-ui/radio'

const Signup = () => {
  return (
    <Layout>
      <Head>
        <title>S'inscrire | EAV Vaud</title>
      </Head>
      <PageHeader title="S'inscrire" />
      <RichText mt={[3, 16]} mb={[8, 16]}>
        <p>
          Pour CHF 100.- par année, l’affiliation à l’EAV te donne accès à du
          conseil et à une protection juridique de la part de SUD. L’EAV promeut
          l’enseignement des arts visuels par l’échange de pratiques
          pédagogiques, des réflexions sur la branche, l’organisation de
          journées pédagogiques et d’expositions de travaux d’élèves.
        </p>
      </RichText>
      <form
        name="Inscription"
        action="/sinscrire/confirmation"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Inscription" />
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          rowGap={{ base: 8, md: 10 }}
          columnGap={8}
        >
          <FormControl id="lastname" isRequired>
            <FormLabel fontSize="xl">Nom</FormLabel>
            <Input name="lastname" placeholder="Nom" type="text" size="lg" />
          </FormControl>
          <FormControl id="firstname" isRequired>
            <FormLabel fontSize="xl">Prénom</FormLabel>
            <Input
              name="firstname"
              placeholder="Prénom"
              type="text"
              size="lg"
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel fontSize="xl">Adresse</FormLabel>
            <Input name="address" placeholder="Adresse" type="text" size="lg" />
          </FormControl>
          <FormControl id="location" isRequired>
            <FormLabel fontSize="xl">NPA + Localité</FormLabel>
            <Input
              name="location"
              placeholder="NPA + Localité"
              type="text"
              size="lg"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel fontSize="xl">Email</FormLabel>
            <Input name="email" placeholder="Email" type="email" size="lg" />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel fontSize="xl">Téléphone</FormLabel>
            <Input name="phone" placeholder="Téléphone" type="text" size="lg" />
          </FormControl>
          <FormControl id="birthday" isRequired>
            <FormLabel fontSize="xl">Date de naissance</FormLabel>
            <Input
              name="birthday"
              placeholder="Date de naissance"
              type="text"
              size="lg"
            />
          </FormControl>
          <FormControl id="diploma">
            <FormLabel fontSize="xl">Diplôme d'enseignement</FormLabel>
            <Input
              name="diploma"
              placeholder="Diplôme d'enseignement"
              type="text"
              size="lg"
            />
          </FormControl>
          <FormControl id="diplomaYear">
            <FormLabel fontSize="xl">Année du diplôme</FormLabel>
            <Input
              name="diplomaYear"
              placeholder="Année du diplôme"
              type="text"
              size="lg"
            />
          </FormControl>
          <FormControl id="schools" isRequired>
            <FormLabel fontSize="xl">Etablissement(s) scolaire(s)</FormLabel>
            <Input
              name="schools"
              placeholder="Etablissement(s) scolaire(s)"
              type="text"
              size="lg"
            />
          </FormControl>
          <FormControl id="teachingFields">
            <FormLabel fontSize="xl">Branches enseignées</FormLabel>
            <Input
              name="teachingFields"
              placeholder="Branches enseignées"
              type="text"
              size="lg"
            />
          </FormControl>
        </Grid>

        <FormControl
          as="fieldset"
          id="teachingLevel"
          mt={{ base: 8, md: 10 }}
          isRequired
        >
          <FormLabel as="legend" fontSize="xl">
            Degré
          </FormLabel>
          <RadioGroup
            name="teachingLevel"
            defaultValue="Secondaire I"
            colorScheme="primary"
          >
            <HStack spacing={8}>
              <Radio size="lg" value="Secondaire I">
                Secondaire I
              </Radio>
              <Radio size="lg" value="Gymnase">
                Gymnase
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <Box mt={16}>
          <Button
            colorScheme="primary"
            size="lg"
            fontSize="2xl"
            type="submit"
            px={20}
            py={10}
          >
            Envoyer
          </Button>
        </Box>
      </form>
    </Layout>
  )
}

export default Signup
