// backend responce for this file can be mocked
import axios from "axios"
import { backendServerUrl } from "../../urls"

type dataType = {
    time: string,
    temp: number,
    humid: number,
}[];

export const getAllData = async () => {
    try {
        const result = await axios.get(backendServerUrl + '/returnAllTemperatureData');
        return result.data;
    } catch (error) {
        console.log('Error in getAllData: ', error);
    }
};

export const getTodaysTempData = async () => {
    try {
        const result = await axios.get(backendServerUrl + '/getThisDaysTempValues');

        let data: dataType = [];
        console.log(result.data.length);

        for(let i = 0; i < result.data.length; i++) {
            data.push({
                time: result.data[i][1],
                temp: result.data[i][0],
                humid: result.data[i][2]
            })
        }
        return data.reverse();
    } catch (error) {
        console.log('Error in getTodaysTempData');
    }
};

export const changeAutoFanModi = (value: boolean) => {
    let controllValue = value? 1 : 0
    try {
        axios.get(backendServerUrl + '/writeAutoModus/fanControll/' + String(controllValue));
    } catch (error) {
        console.log("Error in changeAutoFanModi");
    }
};
