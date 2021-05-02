import React from 'react'
import Head from 'next/head'

import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import RichText from 'components/rich-text'

const Signup = () => {
  return (
    <Layout>
      <Head>
        <title>S'inscrire | EAV Vaud</title>
      </Head>
      <PageHeader title="S'inscrire" />
      <RichText mt={[3, 16]}>
        <p>S'inscrire</p>
      </RichText>
      <form name="contact" action="/succes" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input type="text" name="firstname" id="firstname" />
          <label htmlFor="yourname">Your Name:</label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">Your Email:</label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">Message:</label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Signup
