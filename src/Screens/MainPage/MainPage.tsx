import { VStack, View } from 'native-base';
import { useEffect, useState } from 'react';
import { getHumid, getTemp } from '../../utils/Api/TempSensorApi';
import { writeRelayHigh, writeRelayLow } from '../../utils/Api/relayControllApi';
import { TempInfoPannel } from '../../components/TempInfoPannel/TempInfoPannel';
import { VentilatorControllPannel } from '../../components/VentilatorControllPannel/VentilatorControllPannel';

export const MainPage = () => {
    const [currentTemp, setCurrentTemp] = useState<number>();
    const [currenthumidity, setCurrenthumidity] = useState<number>();
    const [loadingTemp, setLoadingTemp] = useState<boolean>(false);
    const [fan, setFan] = useState<boolean>()

    let isMounted = true;

    const handleFan = (currentState?: boolean) => {
        setFan(!currentState)
        if (currentState) {
            writeRelayLow();
        } else {
            writeRelayHigh();
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
        }, 12000)

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
                <TempInfoPannel
                    loadingTemp={loadingTemp}
                    handlGetInfo={handlGetInfo}
                    currentTemp={currentTemp}
                    currenthumidity={currenthumidity}
                />

                <View height={"20px"}/>
                
                <VentilatorControllPannel
                    fan={fan}
                    handleFan={handleFan}
                />
            </VStack>
        </div>
    );
};
