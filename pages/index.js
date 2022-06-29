import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import Layout from '../components/layouts/content'
import { Section, Paragraph } from '../components/Style'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p={3}
          align="center"
        >
          Navigate The Market With Confidence
        </Box>

        <Box display={{ md: 'flex' }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h2" variants="page-title">
              Ngọc Tiến Lê
            </Heading>
            <p>Front-End Developer | Chart Artist</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ava.jpeg"
              alt="Profile Avatar"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Introduce
          </Heading>
          <Paragraph>
            The goal as a trader is to create a system with fixed criteria,
            narrowed down to each element of a trade setup in order to maximize
            odds in your favor and eliminate emotional-based decision making as
            much as possible. And with Brave Thinking, my goal here is to help
            you build your full trading potential.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
