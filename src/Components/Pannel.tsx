import { useEffect, useState } from "react";
import data from '../endpoints.json'
import { getCurrentData } from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faRotateRight } from "@fortawesome/free-solid-svg-icons";

type PannelType = {
    name: string;
    windowWidth: number;
};

type sensorDataType = {
    humid: number,
    temp: number,
}

export const Pannel: React.FC<PannelType> = ({ name, windowWidth }) => {
    const [sensorData, setSensorData] = useState<sensorDataType>();
    const [spin, setSpin] = useState(false);

    const handleColor = () => {
        if (sensorData?.humid) {
            return sensorData?.humid > 60 ? "lightsalmon" : "white";
        } else {
            return "white";
        };
    };

    const handleData = async () => {
        setSpin(true);
        let ip = '';
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                ip = data[i].ip
            };
        };

        setSensorData(await getCurrentData(ip));
        setSpin(false);
    };

    useEffect(() => {
        handleData();
        const fetchDataIntervall = setInterval(() => {
            handleData();
        }, 60000)

        return () => {
            clearInterval(fetchDataIntervall);
        }
    }, [])

    return (
        <div style={{
            width: windowWidth / 2,
            backgroundColor: handleColor(),
            float: "left",
            borderRadius: 10,
            borderColor: "block",
        }}>
          
            <h2>{name} info: </h2>

            <h3>Temperatur: {sensorData?.temp}°C</h3>
            <h3>Humidity: {sensorData?.humid}%</h3>

            <FontAwesomeIcon icon={faRotateRight} spin={spin} onClick={() => handleData()} />
        </div>
    );
};