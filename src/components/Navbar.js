import React from 'react'
import { Flex, Image } from 'rebass'
import styled from 'styled-components'
import BandLogoSrc from '../images/bandLogo.png'

const StyledA = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: white;
  margin-right: 20px;
  &:hover {
    font-weight: 700;
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`

export default props => (
  <Flex
    flexDirection="row"
    textAlign="center"
    justifyContent="center"
    bg="#4f3ca9"
    style={{ height: '60px' }}
    alignItems="center"
    px="135px"
  >
    <Flex width={1 / 2} style={{ textAlign: 'center' }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://beta.coinhatcher.com/tcr/listed"
      >
        <Image src={BandLogoSrc} height="30px" />
      </a>
    </Flex>
    <Flex
      width={1 / 2}
      style={{ textAlign: 'center' }}
      justifyContent="flex-end"
    >
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.bandprotocol.com/"
      >
        Documentation
      </StyledA>
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href="https://bandprotocol.com/"
      >
        Bandprotocol.com
      </StyledA>
    </Flex>
  </Flex>
)
