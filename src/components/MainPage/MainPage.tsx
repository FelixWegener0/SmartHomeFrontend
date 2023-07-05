import { Box, Button, VStack, Text, HamburgerIcon, HStack, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { getHumid, getTemp } from '../../utils/Api/TempSensorApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faBars, faCloud, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

export const MainPage = () => {
    const navigation = useNavigate();
    const [currentTemp, setCurrentTemp] = useState<number>();
    const [currenthumidity, setCurrenthumidity] = useState<number>();

    let isMounted = true;

    const info = async () => {
        if (isMounted) {
            setCurrentTemp(await getTemp());
            setCurrenthumidity(await getHumid());
        }
    }

    useEffect(() => {
        const info = async () => {
            if (isMounted) {
                setCurrentTemp(await getTemp());
                setCurrenthumidity(await getHumid());
            }
        }
        info();

        const interval = setInterval(() => {
            info();
        }, 120000)

        return () => {
            isMounted = false;
        }
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
                    alignItems={'flex-start'}
                    paddingLeft={8}
                >
                    <Button onFocus={() => navigation('/license')} backgroundColor={'white'} paddingLeft={-2}>
                        <HStack space={4}>
                            <FontAwesomeIcon icon={faBars} />
                            <Text>Lizenzen</Text>
                        </HStack>
                    </Button>
                    <HStack space={4}>
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                        <Text>{currentTemp}°C</Text>
                    </HStack>
                    <HStack space={4}>
                        <FontAwesomeIcon icon={faCloud} />
                        <Text>{currenthumidity}%</Text>
                    </HStack>
                    
                    <Button backgroundColor={'white'} onFocus={() => info()} paddingLeft={-2}>
                        <HStack space={4}>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                            <Text>Refresh Temperature</Text>
                        </HStack>
                    </Button>
                    <View height={"50px"}/>
                </Box>
            </VStack>
        </div>
    );
};
