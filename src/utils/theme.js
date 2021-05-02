import { extendTheme } from '@chakra-ui/react'

const fonts = {
  body: 'Fira Sans, sans-serif',
  heading: 'Fira Sans, sans-serif',
}

const colors = {
  brand: '#392079',
}

const theme = extendTheme({ fonts, colors })

export default theme
