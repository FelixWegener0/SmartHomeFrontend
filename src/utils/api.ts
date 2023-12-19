import axios from "axios"

export const getDateFromSpecificEndpoint = async (url: string) => {
    try {
        const result = await axios.get<number>(url, {
            timeout: 10000,
        });
        console.log('API RESULT: ', url, ' ', result.data)
        return result.data;
    } catch (error) {
        console.log(error);
    };
    return 0;
};
