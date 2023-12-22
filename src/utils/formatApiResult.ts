import { GetAllDataType } from "./api"

export type newDataType = {
    name?: string;
    data?: {
        date?: string;
        time?: string;
        temp?: number;
        humid?: number;
        name?: string;
    }[];
}[]

export const seperateData = (data?: GetAllDataType) => {
    const names = ["Wohnzimmer", "Flur", "Schlafzimmer", "Badezimmer"]
    const newData:newDataType = [];

    for (let i = 0; i < names.length; i++) {
        newData.push({
            name: names[i]
        });
    }
    
    if (data) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < data.length; j++) {
                if (newData[i].name === data[j].name) {
                    if (!newData[i].data) newData[i].data = [];
                    newData[i].data?.push(data[j])
                }
            }
        }
    }
    return newData;
}
