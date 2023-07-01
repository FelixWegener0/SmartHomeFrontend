import axios from "axios"
import { BASEURL } from "../../urls";

export const getInfo = async () => {
    try {
        const result = await axios.get(BASEURL + '/temp');
        return result.data;
    } catch (error: any) {
        console.log('Error in getInfo', error);
    }
}
