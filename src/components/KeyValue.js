import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

const TextInput = styled.input`
  width: 100%;
  border: 1px solid #000000;
  font-size: 16px;
  border-radius: 4px;
`

const Button = styled.button`
  font-size: 16px;
  border-radius: 4px;
`

export default ({ keyName, value, handleKV, removeKey }) => (
  <Flex flexDirection="row" textAlign="center" justifyContent="center">
    <Box flex={3} pt={1}>
      {keyName}
    </Box>
    <Box flex={5} style={{ textAlign: 'center' }}>
      <TextInput
        type="text"
        value={value}
        onChange={({ target }) => handleKV({ [keyName]: target.value })}
      />
    </Box>
    <Box flex={1} style={{ textAlign: 'right' }}>
      <Button onClick={() => removeKey(keyName)}>X</Button>
    </Box>
  </Flex>
)
