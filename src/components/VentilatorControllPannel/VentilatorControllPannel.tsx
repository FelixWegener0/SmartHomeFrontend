import { faFan, faRobot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HStack, Text, Spacer } from "native-base"
import { DefaultView } from "../DefaultView/DefaultView"

type VentilatorControllPannelProps = {
    fan?: boolean,
    autoFanControll: boolean,
    autoFanControllTemp: number,

    handleFan: (value: boolean) => void,
    setAutoFanControll: (value: boolean) => void,
}

export const VentilatorControllPannel: React.FC<VentilatorControllPannelProps> = ({ setAutoFanControll, handleFan, autoFanControllTemp, autoFanControll, fan }) => {
    return (
        <DefaultView>
            <Spacer height={"15px"}/>
            <HStack>
                <Text>Ventilator Controll</Text>
                <Spacer width={'40px'} />
                <FontAwesomeIcon icon={faRobot} size={'lg'} onClick={() => setAutoFanControll(!autoFanControll)} fade={autoFanControll} />
            </HStack>        

            <Spacer height={'20px'}/>
            <>{autoFanControll && <Text>Automatisches Ventilator schalten bei mehr als {autoFanControllTemp}°C</Text>}</>
            <>{autoFanControll && <Text>Automatischer modus Aktiv</Text>}</>

            <Spacer height={"20px"}/>
            <HStack>
                <FontAwesomeIcon icon={faFan} spin={fan} onClick={() => handleFan(fan || false)} size={'lg'} />
                <Text paddingLeft={4}>Schreibtisch</Text>
            </HStack>
            <Spacer height={"15"}/>
        </DefaultView>

    )
}
