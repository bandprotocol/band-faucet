import React from 'react'
import { Flex, Box, Text, Button, Link } from 'rebass'
import styled from 'styled-components'
import PageContainer from 'components/PageContainer'

const TextInput = styled.input`
  width: 480px
  padding: 12px 20px;
  border: 1px solid #000000;
  font-size: 16px;
  border-radius: 4px;
`

export default ({ address, result, error, onChange, onClick }) => (
  <PageContainer>
    <Flex flexDirection="column" alignItems="center">
      <Box my={4}>
        <Text fontWeight={600} fontSize={24}>
          Rinkeby Band Faucet
        </Text>
      </Box>

      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <TextInput
          type="text"
          name="address"
          value={address}
          placeholder="0x"
          onChange={onChange}
        />
        <Button
          variant="primary"
          mx="20px"
          px="20px"
          py="10px"
          width="300px"
          onClick={onClick}
        >
          Give me Band!!!
        </Button>
      </Flex>
      <Text py={2} color="red" textAlign="center">
        {error}
      </Text>
      <Box py={4}>
        {result.map((e, i) => (
          <Flex flexDirection="row" key={i} py={2}>
            <Text fontSize={2}>{e.message}</Text>
            <Link href={e.link} target="_blank" px={2}>
              <i class="fas fa-external-link-alt" />
            </Link>
          </Flex>
        ))}
      </Box>
    </Flex>
  </PageContainer>
)
