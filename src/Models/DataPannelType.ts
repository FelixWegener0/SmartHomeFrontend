export type DataPannelType = {
    data: {
        name: string;
        ip: string;
        endpoints: {
            name: string;
            path: string;
        }[]
    }[]
}
