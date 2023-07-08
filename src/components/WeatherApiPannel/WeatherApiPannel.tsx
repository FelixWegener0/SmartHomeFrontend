import { VStack, Text, Spacer } from "native-base"
import { DefaultView } from "../DefaultView/DefaultView"
import { useEffect, useState } from "react"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherApiInfo } from "../../utils/Api/weatherApi";

export const WeatherApiPannel: React.FC = () => {
    const [loadingData, setLoadingData] = useState(false);
    const [currentData, setCurrentData] = useState<number | undefined>(undefined);

    const handleGetApiData = async () => {
        setLoadingData(true);
        setCurrentData(await getWeatherApiInfo());
        setLoadingData(false);
    }


    useEffect(() => {
        handleGetApiData();
    }, [])

    return (
        <DefaultView>
            <VStack alignItems={'flex-start'} space={4}>
                <Spacer height={"15px"}/>
                <Text>Aktuelle Wetter daten:</Text>
                <Text>Temperatur in dortmund: {currentData}</Text>

                <FontAwesomeIcon icon={faArrowsRotate} spin={loadingData} onClick={() => handleGetApiData()} size={'lg'} />
            </VStack>
        </DefaultView>
    )
}