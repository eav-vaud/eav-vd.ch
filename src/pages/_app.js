import { ChakraProvider } from '@chakra-ui/react'
import eavTheme from 'utils/theme'

function EavApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={eavTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default EavApp
