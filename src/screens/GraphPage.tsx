import { useEffect, useState } from "react";
import { MainPageButton } from "../Components/Button";
import { RoomGraph } from "../Components/Graph";
import { GetAllDataType, getAllDataFromDataBase } from "../utils/api";
import { newDataType, seperateData } from "../utils/formatApiResult";

export const GraphPage = () => {
    const [data, setData] = useState<newDataType>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const hadleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    const getData = async () => {
        setData(seperateData(await getAllDataFromDataBase()));
    };

    const Graphs = () => {
        return (
            <div>
                {
                    data?.map((element) => {
                        if (!element.data) return undefined;

                        return (
                            <RoomGraph windowWidth={windowWidth} data={element} />
                        );
                    })
                };
            </div>
        );
    };

    useEffect(() => {
        window.addEventListener('resize', hadleWindowResize);
        getData();

        return () => {
            window.removeEventListener('resize', hadleWindowResize);
        };
    }, []);

    return (
        <div>
            <MainPageButton />
            <Graphs />
        </div>
    );
};
