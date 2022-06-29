import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import Layout from '../components/layouts/main'
import theme from '../theme/theme'
import Fonts from '../theme/fonts'

const MyWebsite = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyWebsite
