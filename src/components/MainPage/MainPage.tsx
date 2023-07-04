import { Box, Button, VStack, Text, HamburgerIcon, HStack, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { getHumid, getTemp } from '../../utils/Api/TempSensorApi';

export const MainPage = () => {
    const navigation = useNavigate();
    const [currentTemp, setCurrentTemp] = useState<number>();
    const [currenthumidity, setCurrenthumidity] = useState<number>();

    let isMounted = true;

    useEffect(() => {
        const info = async () => {
            if (isMounted) {
                console.log('call intervall')
                setCurrentTemp(await getTemp());
                setCurrenthumidity(await getHumid());
            }
        }

        const interval = setInterval(() => {
            info();
        }, 120000)
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
                rounded={'sm'}
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
                    <Text>Aktuelle Luftfeuchtigkeit: {currenthumidity}%</Text>
                    <View height={"50px"}/>
                </Box>
            </VStack>
        </div>
    );
};
