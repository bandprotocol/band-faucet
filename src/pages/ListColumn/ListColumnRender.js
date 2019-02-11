import React from 'react'
import { Flex, Box, Text, Button } from 'rebass'
import styled from 'styled-components'
import KeyValue from '../../components/KeyValue'

const TextInput = styled.input`
  width: 100%;
  border: 1px solid #000000;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 4px;
`

export default ({ kvs, rmK, handleKV, setKey, handleKeyChange, state }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    justifyContent="flex-start"
    pt={20}
    width={600}
  >
    <Flex flexDirection="row" width={600}>
      <Text pt={1} width={1 / 4}>
        Parameters
      </Text>
      <Flex flexDirection="column" width={3 / 4}>
        {Object.keys(kvs).map((k, i) => (
          <KeyValue
            key={i}
            keyName={k}
            value={kvs[k]}
            removeKey={rmK}
            handleKV={handleKV}
          />
        ))}
        <Flex flexDirection="row" flex={1} mt={3}>
          <Box width={1 / 3} style={{ textAlign: 'center' }}>
            <TextInput
              type="text"
              value={state.key}
              onChange={({ target }) => handleKeyChange(target.value)}
            />
          </Box>
          <Box width={2 / 3} style={{ textAlign: 'center' }}>
            <Button
              variant="outline"
              px="20px"
              py="10px"
              width="300px"
              onClick={setKey}
            >
              Add New Key
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)
