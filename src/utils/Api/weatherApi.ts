import axios from "axios";
import { weatherApiUrl } from "../../urls";

const { REACT_APP_WEATHER_API_USER, REACT_APP_WEATHER_API_PASSWORD } = process.env

export const getWeatherApiInfo = async () => {
    try {
        if (REACT_APP_WEATHER_API_PASSWORD && REACT_APP_WEATHER_API_USER) {
            const result = await axios.get(weatherApiUrl, {
                auth: {
                    username: REACT_APP_WEATHER_API_USER,
                    password: REACT_APP_WEATHER_API_PASSWORD,
                }
            });
            return result.data
        }
    } catch (error: any) {
        console.log('Error in weatherApi get info: ', error);
    }
}