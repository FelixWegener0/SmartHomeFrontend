import React, { useEffect, useState } from "react";
import { getDateFromSpecificEndpoint } from "../utils/api";
import data from '../endpoints.json'
import { Pannel } from "../Components/Pannel";
import { AktualliesierungsButton, SwitchToGraphPageButton } from "../Components/Button";

export const MainPage = () => {
    const [schlafzimmerTemp, setschlafzimmerTemp] = useState<number | number>();
    const [schlafzimmerHumid, setschlafzimmerHumid] = useState<number | number>();

    const [wohnzimmerTemp, setWohnzimmerTemp] = useState(0);
    const [wohnzimmerHumid, setWohnzimmerHumid] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const hadleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    const checkInfo = async () => {
        setschlafzimmerTemp(await getDateFromSpecificEndpoint(data[0].ip + '/temp'));
        setschlafzimmerHumid(await getDateFromSpecificEndpoint(data[0].ip + '/humid'));

        // setWohnzimmerTemp(await getDateFromSpecificEndpoint(data[1].ip + '/temp'));
        // setWohnzimmerHumid(await getDateFromSpecificEndpoint(data[1].ip + '/humid'));
    }

    useEffect(() => {
        checkInfo();
        window.addEventListener('resize', hadleWindowResize);
        const dataIntervall = setInterval(() => {
            console.log('log in intervall');
            checkInfo();
        }, 60000)

        return () => {
            window.removeEventListener('resize', hadleWindowResize);
            clearInterval(dataIntervall);
        }
    }, [])

    return (
        <div>
            <h1>Übersicht Temperatur und Luftfeuchtigkeit</h1>

            <Pannel name={"Schlafzimmer"} localTemp={schlafzimmerTemp} localHumid={schlafzimmerHumid} windowWidth={windowWidth} />
            <Pannel name={"Wohnzimmer"} localTemp={0} localHumid={0} windowWidth={windowWidth} />
            <Pannel name={"Badezimmer"} localTemp={0} localHumid={0} windowWidth={windowWidth} />
            <Pannel name={"Flur"} localTemp={0} localHumid={0} windowWidth={windowWidth} />

            <div>
                <AktualliesierungsButton checkInfo={checkInfo} windowWidth={windowWidth} />
                <SwitchToGraphPageButton windowWidth={windowWidth} />
            </div>
        </div>
    );
};
