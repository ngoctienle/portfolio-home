import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { Section, LessionGridItem } from '../components/Style'
import Layout from '../components/layouts/content'

import Lesson1 from '../public/images/Lesson 1 Thumb.jpg'
import Lesson2 from '../public/images/Lesson 2 Thumb.jpg'
import Lesson3 from '../public/images/Lesson 3 Thumb.jpg'
import Lesson4 from '../public/images/Lesson 4 Thumb.jpg'
import Lesson5 from '../public/images/Lesson 5 Thumb.jpg'
import Lesson6 from '../public/images/Lesson 6 Thumb.jpg'
import Lesson7 from '../public/images/Lesson 7 Thumb.jpg'
import Lesson8 from '../public/images/Lesson 8 Thumb.jpg'
import Lesson9 from '../public/images/Lesson 9 Thumb.jpg'
import Lesson10 from '../public/images/Lesson 10 Thumb.jpg'
import Lesson11 from '../public/images/Lesson 11 Thumb.jpg'
import Lesson12 from '../public/images/Lesson 12 Thumb.jpg'
const Lessons = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Smart Money Course
        </Heading>

        <SimpleGrid columns={{ sm: 2, md: 3 }} gap={6}>
          <Section>
            <LessionGridItem id="lesson1" title="Lesson 1" thumbnail={Lesson1}>
              The Title Lesson 1
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson2" title="Lesson 2" thumbnail={Lesson2}>
              The Title Lesson 2
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson3" title="Lesson 3" thumbnail={Lesson3}>
              The Title Lesson 3
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson4" title="Lesson 4" thumbnail={Lesson4}>
              The Title Lesson 4
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson5" title="Lesson 5" thumbnail={Lesson5}>
              The Title Lesson 5
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson6" title="Lesson 6" thumbnail={Lesson6}>
              The Title Lesson 6
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson7" title="Lesson 7" thumbnail={Lesson7}>
              The Title Lesson 7
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson8" title="Lesson 8" thumbnail={Lesson8}>
              The Title Lesson 8
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem id="lesson9" title="Lesson 9" thumbnail={Lesson9}>
              The Title Lesson 9
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem
              id="lesson10"
              title="Lesson 10"
              thumbnail={Lesson10}
            >
              The Title Lesson 10
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem
              id="lesson11"
              title="Lesson 11"
              thumbnail={Lesson11}
            >
              The Title Lesson 11
            </LessionGridItem>
          </Section>
          <Section>
            <LessionGridItem
              id="lesson12"
              title="Lesson 12"
              thumbnail={Lesson12}
            >
              The Title Lesson 12
            </LessionGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Lessons
