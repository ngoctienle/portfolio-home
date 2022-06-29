import Link from 'next/link'
import Image from 'next/image'

import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoStyle = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {
  const footImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoStyle>
          <Image
            src={footImg}
            width={20}
            height={20}
            alt="Brave Thinking Logo"
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            BraveThinking
          </Text>
        </LogoStyle>
      </a>
    </Link>
  )
}
export default Logo
