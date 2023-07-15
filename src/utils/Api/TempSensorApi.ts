import axios from "axios"
import { backendServerUrl } from "../../urls";

export const getTemp = async () => {
    try {
        const result = await axios.get(backendServerUrl + '/getCurrentTemp');
        return result.data;
    } catch (error: any) {
        console.log('Error in getTemp', error);
    }
}

export const getHumid = async () => {
    try {
        const result = await axios.get(backendServerUrl + '/getCurrentHumid');
        return result.data;
    } catch (error: any) {
        console.log('Error in getHumid', error);
    }
}