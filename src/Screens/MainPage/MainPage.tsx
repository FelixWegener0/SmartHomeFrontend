import { HStack } from 'native-base';
import { useEffect, useState } from 'react';
import { getHumid, getTemp } from '../../utils/Api/TempSensorApi';
import { writeRelayHigh, writeRelayLow } from '../../utils/Api/relayControllApi';
import { TempInfoPannel } from '../../components/TempInfoPannel/TempInfoPannel';
import { VentilatorControllPannel } from '../../components/VentilatorControllPannel/VentilatorControllPannel';
import { WeatherApiPannel } from '../../components/WeatherApiPannel/WeatherApiPannel';

export const MainPage = () => {
    const [currentTemp, setCurrentTemp] = useState<number>();
    const [currenthumidity, setCurrenthumidity] = useState<number>();
    const [loadingTemp, setLoadingTemp] = useState<boolean>(false);
    const [fan, setFan] = useState<boolean>();
    const [autoFanControll, setAutoFanControll] = useState<boolean>(false);

    let isMounted = true;
    let autoFanControllTemp = 28;

    const handleChangeAutoFanControll = (value: boolean) => {
        setAutoFanControll(value);
    }

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
                let temp = await getTemp();
                let humid = await getHumid();

                if (autoFanControll) {
                    if (temp > autoFanControllTemp) {
                        if (!fan) {
                            writeRelayHigh();
                            setFan(true);
                        }
                    } else {
                        if (fan) {
                            writeRelayLow();
                            setFan(false);
                        }
                    }
                }

                setCurrentTemp(temp);
                setCurrenthumidity(humid);
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
    }, [autoFanControll, fan])
 
    return (
        <div
            style={{
                backgroundColor: 'black',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <HStack flexWrap={'wrap'} space={5}>
                <TempInfoPannel
                    loadingTemp={loadingTemp}
                    handlGetInfo={handlGetInfo}
                    currentTemp={currentTemp}
                    currenthumidity={currenthumidity}
                />
                
                <VentilatorControllPannel
                    fan={fan}
                    handleFan={handleFan} autoFanControll={autoFanControll} setAutoFanControll={handleChangeAutoFanControll}
                    autoFanControllTemp={autoFanControllTemp}
                />

                <WeatherApiPannel />
            </HStack>
        </div>
    );
};
