import { faFan, faRobot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, View, HStack, Text, Spacer } from "native-base"

type VentilatorControllPannelProps = {
    fan?: boolean,
    autoFanControll: boolean,
    autoFanControllTemp: number,

    handleFan: (value: boolean) => void,
    setAutoFanControll: (value: boolean) => void,
}

export const VentilatorControllPannel: React.FC<VentilatorControllPannelProps> = ({ setAutoFanControll, handleFan, autoFanControllTemp, autoFanControll, fan }) => {
    return (
        <Box
            rounded={'sm'}
            backgroundColor='white'
            width={'50%'}
            alignItems={'flex-start'}
            paddingLeft={8}
        >
            <HStack>
                <Text>Ventilator Controll</Text>
                <Spacer width={'40px'} />
                <FontAwesomeIcon icon={faRobot} onClick={() => setAutoFanControll(!autoFanControll)} fade={autoFanControll} />
            </HStack>        

            {autoFanControll && <Text>Automatische steuerung bei mehr als {autoFanControllTemp}°C</Text>}
            {autoFanControll && <Text>Automatischer modus Aktiv</Text>}

            <View height={"20px"}/>
            <HStack>
                <FontAwesomeIcon icon={faFan} spin={fan} onClick={() => handleFan(fan || false)} size={'lg'} />
                <Text paddingLeft={4}>Schreibtisch</Text>
            </HStack>
            <View height={"50px"}/>
        </Box>
    )
}