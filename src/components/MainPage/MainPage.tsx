import { Box, Button, VStack, Text, HStack, View } from 'native-base';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getHumid, getTemp } from '../../utils/Api/TempSensorApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faBars, faCloud, faFan, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { writeRelayHigh, writeRelayLow } from '../../utils/Api/relayControllApi';

export const MainPage = () => {
    const navigation = useNavigate();
    const [currentTemp, setCurrentTemp] = useState<number>();
    const [currenthumidity, setCurrenthumidity] = useState<number>();
    const [loadingTemp, setLoadingTemp] = useState<boolean>(false);
    const [fan, setFan] = useState<boolean>()

    let isMounted = true;

    const handleFan = async (currentState: boolean | undefined) => {
        if (currentState) {
            writeRelayLow();
            setFan(false);
        } else {
            writeRelayHigh();
            setFan(true);
        }
    }

    const handlGetInfo = async () => {
        if (isMounted) {
            setLoadingTemp(true);
            setCurrentTemp(await getTemp());
            setCurrenthumidity(await getHumid());
            setLoadingTemp(false);
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
            setLoadingTemp(true);
            info();
            setLoadingTemp(false);
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

                    <Text>Temperatur</Text>
                    <View height={"20px"}/>

                    <HStack space={4}>
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                        <Text>{currentTemp}°C</Text>
                    </HStack>
                    <HStack space={4}>
                        <FontAwesomeIcon icon={faCloud} />
                        <Text>{currenthumidity}%</Text>
                    </HStack>
                    
                    <FontAwesomeIcon icon={faArrowsRotate} spin={loadingTemp} onClick={() => handlGetInfo()} />

                    <View height={"50px"}/>
                </Box>
                <View height={"20px"}/>
                <Box
                    rounded={'sm'}
                    backgroundColor='white'
                    width={'50%'}
                    alignItems={'flex-start'}
                    paddingLeft={8}
                >
                    <Text>Fan controll</Text>
                    <View height={"20px"}/>
                    <HStack>
                        <FontAwesomeIcon icon={faFan} spin={fan} onClick={() => handleFan(fan)}/>
                        <Text paddingLeft={4}>Fan 1</Text>
                    </HStack>
                    <View height={"50px"}/>
                </Box>
            </VStack>
        </div>
    );
};
