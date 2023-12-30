import axios from "axios"
import data from '../endpoints.json'

const serverIp = "http://pi.local:5000";

export type GetAllDataType = {
    date: string;
    time: string;
    temp: number;
    humid: number;
    name: string;
}[];

type dataBaseType = [
    [
        string,
        string,
        number,
        number,
        string,
    ]
];

export const getDateFromSpecificEndpoint = async (url: string) => {
    try {
        const result = await axios.get<number>(url, {
            timeout: 10000,
        });
        console.log('API RESULT: ', url, ' ', result.data)
        return result.data;
    } catch (error) {
        console.log('error for url: ', url, '   ', error);
        return 0;
    };
};

export const getAllDataFromDataBase = async () => {
    const url = serverIp + '/allTodaysData'
    const data: GetAllDataType = [];

    try {
        const result = await axios.get<dataBaseType>(url, {
            timeout: 1000,
        });
        for (let i = 0; i < result.data.length; i++) {
            data.push({
                date: result.data[i][0],
                time: result.data[i][1],
                temp: result.data[i][2],
                humid: result.data[i][3],
                name: result.data[i][4]
            });
        };

        console.log("console.log from api: ", data)
        return data;
    } catch (error) {
        console.log(error);
    };
};

export const getTodaysData = async (room: string, allData: number) => {
    const url = serverIp + '/allTodaysDataRoom/' + room + '/' + allData

    try {
        const result = await axios.get(url, {
            timeout: 10000,
        });
        return result.data;
    } catch (error) {
        console.log(error)
    }

    console.log(url)
}

export const getCurrentData = async (ip: string) => {
    let tempResult = 0;
    let humidResult = 0;

    while(tempResult === 0) {
        try {
            const result = await axios.get<number>(ip + '/temp');
            tempResult = result.data;
        } catch (error: any) {
            console.log('Error in get Temp for: ', ip, '    ' , error.message)
            break;
        }
    };
    
    while(humidResult === 0) {
        try {
            const result = await axios.get<number>(ip + '/humid');
            humidResult = result.data;
        } catch (error: any) {
            console.log('Error in get Humid for: ', ip, '    ', error.message)
            break;
        }
    };
    return { temp: tempResult, humid: humidResult }
};
