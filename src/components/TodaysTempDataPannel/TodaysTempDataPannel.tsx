import { useEffect, useState } from "react"
import { DefaultView } from "../DefaultView/DefaultView"
import { getTodaysTempData } from "../../utils/Api/backendAPI"
import { VStack, Text } from "native-base"
import { Line, LineChart, XAxis, YAxis } from "recharts"

type TodaysTempDataPannel = {}

type dataType = {
    time: string,
    temp: number
}[]

export const TodaysTempDataPannel: React.FC<TodaysTempDataPannel> = ({}) => {
    const [data, setData] = useState<dataType>()

    useEffect(() => {
        const getInfo = async () => {
            setData(await getTodaysTempData())
        }

        getInfo();
    }, [])

    return (
        <DefaultView>
            <VStack space={5}>
                <Text>Heutige Wetterdaten vom Sensor</Text>

                <LineChart width={300} height={150} data={data}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Line type={"monotone"} dataKey="temp" stroke="#82ca9d" />
                </LineChart>
            </VStack>
        </DefaultView>
    )
}