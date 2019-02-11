import React from 'react'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HighlightNavLink = styled(NavLink)`
  &.is-active {
    font-weight: 700;
    text-decoration: underline;
  }
`

export default props => (
  <Flex flexDirection="row" textAlign="center" justifyContent="center">
    <Box width={1 / 2} style={{ textAlign: 'center' }}>
      <HighlightNavLink to="/faucet" activeClassName="is-active" exact={true}>
        Faucet
      </HighlightNavLink>
    </Box>
    <Box width={1 / 2} style={{ textAlign: 'center' }}>
      <HighlightNavLink
        to="/create-community"
        activeClassName="is-active"
        exact={true}
      >
        Create Community
      </HighlightNavLink>
    </Box>
  </Flex>
)
