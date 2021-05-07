import { extendTheme } from '@chakra-ui/react'

const fonts = {
  body: 'Fira Sans, sans-serif',
  heading: 'Fira Sans, sans-serif',
}

const colors = {
  brand: '#392079',
  primary: {
    50: '#eceaff',
    100: '#c7c2f2',
    200: '#a59ae5',
    300: '#8572da',
    400: '#664ace',
    500: '#5130b5',
    600: '#42258d',
    700: '#2b1b66',
    800: '#150f3f',
    900: '#07031a',
  },
}

const theme = extendTheme({ fonts, colors })

export default theme
