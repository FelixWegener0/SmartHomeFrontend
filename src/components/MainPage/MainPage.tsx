import { Box, Button, VStack, Text, HamburgerIcon, HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { getInfo } from '../../utils/Api/getInfo';

type returnType = {
    devices: {
        name: string,
        url: string,
    }[]
}

export const MainPage = () => {
    const navigation = useNavigate();
    const [currentTemp, setCurrentTemp] = useState<number>();
    let isMounted = true;

    useEffect(() => {
        const info = async () => {
            if (isMounted) {
                setCurrentTemp(await getInfo());
            }
        }

        const interval = setInterval(() => {
            info();
        }, 10000)
    }, [])
 
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
                    <Text>Aktuelle Temperatur: {currentTemp}°C</Text>
                </Box>
            </VStack>
        </div>
    );
};
