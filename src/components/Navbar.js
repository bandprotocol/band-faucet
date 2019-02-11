import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { NavLink } from 'react-router-dom';

export default props => (
  <Flex flexDirection="column" alignItems="center">
    <NavLink to="/faucet" activeClassName="is-active" exact={true} >Faucet </NavLink>
    <NavLink to="/createcommunity" activeClassName="is-active" exact={true} >Create Community </NavLink>
  </Flex>
)