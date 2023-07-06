import { faFan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, View, HStack, Text } from "native-base"

type VentilatorControllPannelProps = {
    fan?: boolean,
    handleFan: (value: boolean) => void,
}

export const VentilatorControllPannel: React.FC<VentilatorControllPannelProps> = ({ handleFan, fan }) => {
    return (
        <Box
            rounded={'sm'}
            backgroundColor='white'
            width={'50%'}
            alignItems={'flex-start'}
            paddingLeft={8}
        >
            <Text>Ventilator Controll</Text>
            <View height={"20px"}/>
            <HStack>
                <FontAwesomeIcon icon={faFan} spin={fan} onClick={() => handleFan(fan || false)} size={'lg'} />
                <Text paddingLeft={4}>Schreibtisch</Text>
            </HStack>
            <View height={"50px"}/>
        </Box>
    )
}