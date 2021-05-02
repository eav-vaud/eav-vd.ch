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
      <RichText my={[3, 16]}>
        <p>Texte d'introduction</p>
      </RichText>
      <form
        name="Inscription"
        action="/succes"
        method="POST"
        data-netlify="true"
      >
        <Grid templateColumns="repeat(2, 1fr)" rowGap={10} columnGap={8}>
          <FormControl id="lastname" isRequired>
            <FormLabel fontSize="xl">Nom</FormLabel>
            <Input placeholder="Nom" type="text" size="lg" />
          </FormControl>
          <FormControl id="firstname" isRequired>
            <FormLabel fontSize="xl">Prénom</FormLabel>
            <Input placeholder="Prénom" type="text" size="lg" />
          </FormControl>
          <FormControl id="location" isRequired>
            <FormLabel fontSize="xl">NPA + Localité</FormLabel>
            <Input placeholder="NPA + Localité" type="text" size="lg" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel fontSize="xl">Email</FormLabel>
            <Input placeholder="Email" type="email" size="lg" />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel fontSize="xl">Téléphone</FormLabel>
            <Input placeholder="Téléphone" type="text" size="lg" />
          </FormControl>
          <FormControl id="birthday" isRequired>
            <FormLabel fontSize="xl">Date de naissance</FormLabel>
            <Input placeholder="Date de naissance" type="text" size="lg" />
          </FormControl>
          <FormControl id="diploma">
            <FormLabel fontSize="xl">Diplôme d'enseignement</FormLabel>
            <Input placeholder="Diplôme d'enseignement" type="text" size="lg" />
          </FormControl>
          <FormControl id="diplomaYear">
            <FormLabel fontSize="xl">Année du diplôme</FormLabel>
            <Input placeholder="Année du diplôme" type="text" size="lg" />
          </FormControl>
          <FormControl id="diplomaYear" isRequired>
            <FormLabel fontSize="xl">Etablissement(s) scolaire(s)</FormLabel>
            <Input
              placeholder="Etablissement(s) scolaire(s)"
              type="text"
              size="lg"
            />
          </FormControl>
          <FormControl id="teachingFields">
            <FormLabel fontSize="xl">Branches enseignées</FormLabel>
            <Input placeholder="Branches enseignées" type="text" size="lg" />
          </FormControl>
          <FormControl as="fieldset" id="teachingLevel" isRequired>
            <FormLabel as="legend" fontSize="xl">
              Degré
            </FormLabel>
            <RadioGroup defaultValue="secondaire">
              <HStack spacing={8}>
                <Radio value="secondaire">Secondaire I</Radio>
                <Radio value="gymnase">Gymnase</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </Grid>

        <Box mt={12}>
          <Button colorScheme="purple" size="lg" type="submit">
            Envoyer
          </Button>
        </Box>
      </form>
    </Layout>
  )
}

export default Signup
