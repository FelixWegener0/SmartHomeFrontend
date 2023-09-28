import { useEffect, useState } from "react"
import { DefaultView } from "../DefaultView/DefaultView"
import { getTodaysTempData } from "../../utils/Api/backendAPI"
import { VStack, Text } from "native-base"
import { Line, LineChart, XAxis, YAxis } from "recharts"

type TodaysTempDataPannelType = {}

type dataTypeTemp = {
    time: string,
    temp: number,
    humid: number,
}[];

export const TodaysTempDataPannel: React.FC<TodaysTempDataPannelType> = ({}) => {
    const [data, setData] = useState<dataTypeTemp>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const hadleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        const getInfo = async () => {
            setData(await getTodaysTempData());
        }

        window.addEventListener('resize', hadleWindowResize);
        getInfo();

        return () => {
            window.removeEventListener('resize', hadleWindowResize);
        }
    }, []);

    return (
        <DefaultView customWidth={windowWidth} customMaxWidh={"97%"} >
            <VStack space={5}>
                <Text>Heutige Wetterdaten vom Sensor</Text>

                <LineChart width={windowWidth - 100} height={150} data={data}>
                    <XAxis dataKey={"time"} />
                    <YAxis dataKey={"temp"} />
                    <Line type={"monotone"} dataKey="temp" stroke="#82ca9d" />
                </LineChart>
            </VStack>
        </DefaultView>
    )
}
