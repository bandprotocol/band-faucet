import React from 'react'
import { Flex, Text, Button, Box } from 'rebass'
import Form from '../../components/Form'
import ListColumn from '../ListColumn/ListColumn'

export default ({
  handleAddKey,
  handleRemoveKey,
  handleField,
  handleKeyValue,
  handleCreateComm,
  state,
}) => (
  <Flex flexDirection="column" alignItems="center" justifyContent="flex-start">
    <Text pt={100} pb={50} fontWeight={600} fontSize={24}>
      Rinkeby Create Band Community
    </Text>
    <Flex flexDirection="column" justifyContent="flex-start" width={600}>
      <Form fieldName="name" val={state.name} handleChange={handleField} />
      <Form fieldName="symbol" val={state.symbol} handleChange={handleField} />
      <Form fieldName="logo" val={state.logo} handleChange={handleField} />
      <Form
        fieldName="description"
        val={state.description}
        handleChange={handleField}
      />
      <Form
        fieldName="website"
        val={state.website}
        handleChange={handleField}
      />
      <Form fieldName="author" val={state.author} handleChange={handleField} />
      <Form
        fieldName="priceEquation"
        val={state.priceEquation}
        handleChange={handleField}
      />
      <Form fieldName="voting" val={state.voting} handleChange={handleField} />
      <Form
        fieldName="collateralEquation"
        val={state.collateralEquation}
        handleChange={handleField}
      />
      <ListColumn
        kvs={state.kvs}
        rmK={handleRemoveKey}
        handleKV={handleKeyValue}
        handleAddKey={handleAddKey}
      />
    </Flex>
    <Box pt={20}>
      <Button variant="primary" onClick={handleCreateComm}>
        Create Community
      </Button>
    </Box>
  </Flex>
)
