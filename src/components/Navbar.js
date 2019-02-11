import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { NavLink } from 'react-router-dom'

export default props => (
  <Flex flexDirection="row" textAlign="center" justifyContent="center">
    <Box width={1 / 2} style={{ textAlign: 'center' }}>
      <NavLink to="/faucet" activeClassName="is-active" exact={true}>
        Faucet{' '}
      </NavLink>
    </Box>
    <Box width={1 / 2} style={{ textAlign: 'center' }}>
      <NavLink to="/create-community" activeClassName="is-active" exact={true}>
        Create Community{' '}
      </NavLink>
    </Box>
  </Flex>
)
