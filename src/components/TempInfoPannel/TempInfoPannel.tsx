import { faBars, faTemperatureThreeQuarters, faCloud, faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, HStack, Text, Spacer } from "native-base"
import { useNavigate } from "react-router-dom";
import { DefaultView } from "../DefaultView/DefaultView";

type TempInfoPannelProps = {
    currentTemp?: number,
    currenthumidity?: number,
    loadingTemp: boolean,

    handlGetInfo: () => void,
}

export const TempInfoPannel: React.FC<TempInfoPannelProps> = ({ handlGetInfo, loadingTemp, currentTemp, currenthumidity }) => {
    const navigation = useNavigate();

    return (
        <DefaultView>
            <Button onFocus={() => navigation('/license')} backgroundColor={'white'} paddingLeft={-2}>
                    <HStack space={4}>
                        <FontAwesomeIcon icon={faBars} size={'lg'} />
                        <Text>Lizenzen</Text>
                    </HStack>
                </Button>

                <Text>Temperatur</Text>
                <Spacer height={"20px"}/>

                <HStack space={4}>
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} size={'lg'} />
                    <Text>{currentTemp}°C</Text>
                </HStack>

                <Spacer height={'10px'} />
                <HStack space={4}>
                    <FontAwesomeIcon icon={faCloud} size={'lg'} />
                    <Text>{currenthumidity}%</Text>
                </HStack>
                
                <Spacer height={'10px'} />
                <FontAwesomeIcon icon={faArrowsRotate} spin={loadingTemp} onClick={() => handlGetInfo()} size={'lg'} />

                <Spacer height={"30px"}/>
        </DefaultView>
    )
}
