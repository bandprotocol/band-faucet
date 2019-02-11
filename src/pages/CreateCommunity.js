import React , { Component } from 'react';
import { Flex, Box, Text } from 'rebass';

export default class CreateCommunity extends Component { 

    state = {
        name: "",
        symbol: "",
        logo: "",
        description: "",
        website: "",
        author: "",
        priceEquation: "",
        voting: "",
        keys: [],
        values: [],
        collateralEquation: "",
    };
    
    render() {
        return (
            <Flex flexDirection="column" alignItems="center">
                <Text pt={100} pb={50} fontWeight={600} fontSize={24}>
                    Rinkeby Create Band Community
                </Text>
                <Flex flexDirection="row" width={1}>
                    <Text bg='red'>
                        name
                    </Text>
                    <Text bg='blue'>
                        ssssss
                    </Text>
                </Flex>
                <Flex flexDirection="row" width={1}>
                    <Text bg='red'>
                        name
                    </Text>
                    <Text bg='blue'>
                        ssssss
                    </Text>
                </Flex>
            </Flex>
        )
    }
}