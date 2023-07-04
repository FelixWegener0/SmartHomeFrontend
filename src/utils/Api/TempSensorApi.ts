import axios from "axios"
import { TempSensorUrl } from "../../urls";

export const getTemp = async () => {
    try {
        const result = await axios.get(TempSensorUrl + '/temp');
        return result.data;
    } catch (error: any) {
        console.log('Error in getTemp', error);
    }
}

export const getHumid = async () => {
    try {
        const result = await axios.get(TempSensorUrl + '/humidity');
        return result.data;
    } catch (error: any) {
        console.log('Error in getHumid', error);
    }
}