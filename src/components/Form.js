import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

const TextInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #000000;
  font-size: 16px;
  border-radius: 4px;
`

export default ({ fieldName, val, handleChange }) => (
  <Flex
    flexDirection="row"
    textAlign="center"
    justifyContent="center"
    pt={1}
    pb={1}
  >
    <Box flex={1} fontSize="16px" pt={3}>
      {fieldName}
    </Box>
    <Box flex={3} style={{ textAlign: 'center' }}>
      <TextInput
        type="text"
        value={val}
        onChange={({ target }) => handleChange(fieldName, target.value)}
      />
    </Box>
  </Flex>
)
