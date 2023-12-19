import React, { useEffect, useState } from "react";
import { getDateFromSpecificEndpoint } from "../utils/api";
import data from '../endpoints.json'

export const MainPage = () => {
    const [schlafzimmerTemp, setschlafzimmerTemp] = useState(0);
    const [schlafzimmerHumid, setschlafzimmerHumid] = useState(0);

    const [wohnzimmerTemp, setWohnzimmerTemp] = useState(0);
    const [wohnzimmerHumid, setWohnzimmerHumid] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const hadleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    const checkInfo = async () => {
        setschlafzimmerTemp(await getDateFromSpecificEndpoint(data[0].ip + '/temp'));
        setschlafzimmerHumid(await getDateFromSpecificEndpoint(data[0].ip + '/humid'))

        // setWohnzimmerTemp(await getDateFromSpecificEndpoint(data[1].ip + '/temp'));
        // setWohnzimmerHumid(await getDateFromSpecificEndpoint(data[1].ip + '/humid'))
    }

    useEffect(() => {
        checkInfo();
        window.addEventListener('resize', hadleWindowResize);

        return () => {
            window.removeEventListener('resize', hadleWindowResize);
        }
    }, [])

    return (
        <div>
            <h1>Übersicht Temperatur und Luftfeuchtigkeit</h1>

            {/* Schlafzimmer infobox */}
            <div style={{
                width: windowWidth / 2,
                backgroundColor: schlafzimmerHumid > 60 ? "lightsalmon" : "white",
                float: "left"
            }}>
                <h2>Schlafzimmer info: </h2>
                <h3>Temperatur: {schlafzimmerTemp}°C</h3>
                <h3>Humidity: {schlafzimmerHumid}%</h3>
            </div>

            {/* Wohnzimmer infobox */}
            <div style={{
                width: windowWidth / 2,
                backgroundColor: wohnzimmerHumid > 60 ? "lightsalmon" : "white",
                float: "right"
            }}>
                <h2>Wohnzimmer info: </h2>
                <h3>Temperatur: {wohnzimmerTemp}°C</h3>
                <h3>Humidity: {wohnzimmerHumid}%</h3>
            </div>

            {/* reset Button */}
            <div>
                <button
                    onClick={() => {
                        checkInfo();
                    }}
                >
                    <h3>Aktualisieren</h3>
                </button>
            </div>
        </div>
    )
}
