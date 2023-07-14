import { useEffect, useState } from "react"
import { DefaultView } from "../DefaultView/DefaultView"
import { getTodaysTempData } from "../../utils/Api/backendAPI"
import { VStack, Text } from "native-base"
import { Line, LineChart, XAxis, YAxis } from "recharts"

type TodaysTempDataPannel = {}

type dataTypeTemp = {
    time: string,
    temp: number,
    humid: number,
}[];

export const TodaysTempDataPannel: React.FC<TodaysTempDataPannel> = ({}) => {
    const [data, setData] = useState<dataTypeTemp>();

    useEffect(() => {
        const getInfo = async () => {
            setData(await getTodaysTempData())
        }

        getInfo();
    }, [])

    return (
        <DefaultView customWidth={"1380px"} customMaxWidh={"97%"} >
            <VStack space={5}>
                <Text>Heutige Wetterdaten vom Sensor</Text>

                <LineChart width={1000} height={150} data={data}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Line type={"monotone"} dataKey="temp" stroke="#82ca9d" />
                    <Line type={"monotone"} dataKey="humid" stroke="#7393B3" />
                </LineChart>
            </VStack>
        </DefaultView>
    )
}