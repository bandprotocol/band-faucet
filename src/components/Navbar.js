import React from 'react';
import { Flex, Box, Text } from 'rebass';
import PageContainer from './PageContainer';
import { NavLink } from 'react-router-dom';

export default props => (
  <PageContainer>
    <Flex flexDirection="row" textAlign="center" justifyContent="center">
      <Box width={1/2} style={{textAlign:"center"}}>
        <NavLink to="/faucet" activeClassName="is-active" exact={true} >Faucet </NavLink>
      </Box>
      <Box width={1/2} style={{textAlign:"center"}}>
        <NavLink to="/createcommunity" activeClassName="is-active" exact={true} >Create Community </NavLink>
      </Box>
    </Flex>
  </PageContainer>
)