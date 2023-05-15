import { Box, Button, VStack, Text, HamburgerIcon, HStack } from 'native-base';
import React from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigation = useNavigate();

    return (
        <div
            style={{
                backgroundColor: 'black',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <VStack>
                <Box
                    rounded='full'
                    backgroundColor='white'
                    width={'50%'}
                >
                    <Button onFocus={() => navigation('/license')} backgroundColor={'white'}>
                        <HStack space={6}>
                            <HamburgerIcon />
                            <Text>Lizenzen</Text>
                        </HStack>
                    </Button>
                </Box>
            </VStack>
        </div>
    );
};
