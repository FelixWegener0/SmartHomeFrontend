import { faBars, faTemperatureThreeQuarters, faCloud, faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Button, HStack, View, Text } from "native-base"
import { useNavigate } from "react-router-dom";

type TempInfoPannelProps = {
    currentTemp?: number,
    currenthumidity?: number,
    loadingTemp: boolean,

    handlGetInfo: () => void,
}

export const TempInfoPannel: React.FC<TempInfoPannelProps> = ({ handlGetInfo, loadingTemp, currentTemp, currenthumidity }) => {
    const navigation = useNavigate();

    return (
        <Box
            rounded={'sm'}
            backgroundColor='white'
            width={'50%'}
            alignItems={'flex-start'}
            paddingLeft={8}
        >
            <Button onFocus={() => navigation('/license')} backgroundColor={'white'} paddingLeft={-2}>
                <HStack space={4}>
                    <FontAwesomeIcon icon={faBars} size={'lg'} />
                    <Text>Lizenzen</Text>
                </HStack>
            </Button>

            <Text>Temperatur</Text>
            <View height={"20px"}/>

            <HStack space={4}>
                <FontAwesomeIcon icon={faTemperatureThreeQuarters} size={'lg'} />
                <Text>{currentTemp}°C</Text>
            </HStack>
            <HStack space={4}>
                <FontAwesomeIcon icon={faCloud} size={'lg'} />
                <Text>{currenthumidity}%</Text>
            </HStack>
            
            <FontAwesomeIcon icon={faArrowsRotate} spin={loadingTemp} onClick={() => handlGetInfo()} size={'lg'} />

            <View height={"50px"}/>
        </Box>
    )
}
