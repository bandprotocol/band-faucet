import React from 'react'
import { Flex, Text, Button } from 'rebass'
import styled from 'styled-components'
import SupplyChainImg from '../../images/supplyChain'
import CheckSign from '../../images/checkSign'
import ErrorSign from '../../images/errorSign'

const TextInput = styled.input`
  width: 370px;
  height: 35px;
  border-radius: 3px;
  border: solid 1px #e7ecff;
  padding: 10px;
  ::placeholder {
    font-family: Avenir;
    font-size: 12px;
    font-style: oblique;
    color: #cbcfe3;
  }
`

const CardBg = styled(Flex)`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.05);
`

const TextHeader = styled(Flex)`
  width: 171px;
  height: 33px;
  font-family: Avenir-Heavy;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  color: #4e3ca9;
`

const StyledButton = styled(Button)`
  width: 240px;
  height: 35px;
  border-radius: 4px;
  font-family: Avenir-Medium;
  font-size: 14px;
  font-weight: 500;
  color: white;
  transition: all 0.25s
  ${props =>
    !props.disable && 'box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);'}
  background-color: ${props => (props.disable ? '#dfe2ef' : '#5b63e4')};

  ${props =>
    !props.disable &&
    `&:hover {
      cursor: pointer;
      background-color: #565ece;
      box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.75);
    }
    &:active {
      cursor: pointer;
      background-color: #565ece;
      box-shadow: 0 0px 0px;
    }
    `}
`

const StyledA = styled.a`
  color: #42c47f;
  text-decoration: underline;
  text-decoration-color: #42c47f;
  &:hover {
    color: #42c47f;
    text-decoration: underline;
    text-decoration-color: #42c47f;
    cursor: pointer;
  }
`

export default ({ address, result, error, onChange, onClick }) => {
  const disable = !address || address.length === 0
  return (
    <CardBg
      width="920px"
      mx="auto"
      flexDirection="column"
      alignItems="center"
      pb="100px"
    >
      <TextHeader mt="40px" mb="80px">
        Band faucet
      </TextHeader>
      <Flex flexDirection="row" width={1}>
        <Flex flex={1} justifyContent="center" alignItems="center">
          <SupplyChainImg width="288" height="383" />
        </Flex>
        <Flex flexDirection="column" flex={1}>
          {result && result.link && (
            <Flex
              textAlign="center"
              bg="rgba(66, 196, 127, 0.1)"
              mb="40px"
              style={{
                width: '370px',
                height: '35px',
                borderRadius: '4px',
                border: 'solid 1px #42c47f',
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Flex mr="10px">
                <CheckSign width="15" height="15" />
              </Flex>
              <Text
                color="#42c47f"
                fontSize="12px"
                textAlign="center"
                lineHeight="35px"
              >
                Your request was successful. View your transaction
                <StyledA
                  target="_blank"
                  rel="noopener noreferrer"
                  href={result.link}
                  style={{ textDecoration: 'underline' }}
                >
                  here
                </StyledA>
                .
              </Text>
            </Flex>
          )}
          {error && (
            <Flex
              textAlign="center"
              bg="#ffe1e1"
              mb="40px"
              p="10px"
              style={{
                width: '370px',
                minHeight: '35px',
                borderRadius: '4px',
                border: 'solid 1px #ec6363',
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Flex mr="10px">
                <ErrorSign width="15" height="15" />
              </Flex>
              <Text color="#ec6363" fontSize="12px" textAlign="center">
                {error}
              </Text>
            </Flex>
          )}
          <Flex mb="20px">
            <Text color="#4e3ca9" fontFamily="Avenir-Medium" fontWeight={500}>
              Your testnet address:
            </Text>
          </Flex>
          <Flex mb="30px">
            <TextInput
              type="text"
              name="address"
              value={address}
              placeholder="Rinkeby address"
              onChange={onChange}
            />
          </Flex>
          <Flex mb="30px">
            <StyledButton disable={disable} onClick={!disable && onClick}>
              <Flex flexDirection="row">
                <Flex mr="20px">Send me 100 Test BAND</Flex>
                <Flex>➔</Flex>
              </Flex>
            </StyledButton>
          </Flex>
          <Flex
            bg="#eef1ff"
            p="20px"
            style={{ maxWidth: '370px', borderRadius: '4px' }}
          >
            <Text
              color="#8d9ff6"
              fontSize="12px"
              lineHeight={1.67}
              style={{ fontStyle: 'oblique' }}
            >
              * By requesting Band Protocol faucet, you agree to waive your …
              Pork loin ground round shankle spare ribs bacon. Pig pastrami
              swine fatback, chicken tenderloin boudin shankle porchetta
              pancetta strip steak landjaeger. Capicola pork tenderloin turkey
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </CardBg>
  )
}
