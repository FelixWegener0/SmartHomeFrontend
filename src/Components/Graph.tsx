import { LineChart, Tooltip, XAxis, Line, YAxis } from "recharts"
import { GetAllDataType } from "../utils/api";
import { newDataType } from "../utils/formatApiResult";

export type data = {
    name?: string;
    data?: {
        date?: string;
        time?: string;
        temp?: number;
        humid?: number;
        name?: string;
    }[];
}

type RoomGraphType = {
    windowWidth: number;
    data: data;
};

export const RoomGraph: React.FC<RoomGraphType> = ({ windowWidth, data }) => {
    return (
        <div
            style={{
                marginLeft: 20,
            }}
        >
            <h1>{data.name}</h1>

            <LineChart width={windowWidth - 50} data={data.data} height={120}>
                <XAxis dataKey={"time"} />

                <Tooltip />
                <Line type={"monotone"} dataKey={"temp"} yAxisId={0} />
                <Line type={"monotone"} dataKey={"humid"} yAxisId={1} />
            </LineChart>
        </div>
    )
}