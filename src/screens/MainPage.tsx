import { useEffect, useState } from "react";
import { Pannel } from "../Components/Pannel";
import { SwitchToGraphPageButton } from "../Components/Button";

export const MainPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const hadleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', hadleWindowResize);


        return () => {
            window.removeEventListener('resize', hadleWindowResize);
        }
    }, [])

    return (
        <div>
            <h1>Übersicht Temperatur und Luftfeuchtigkeit</h1>

            <Pannel name={"Schlafzimmer"} windowWidth={windowWidth} />
            <Pannel name={"Wohnzimmer"} windowWidth={windowWidth} />
            <Pannel name={"Badezimmer"} windowWidth={windowWidth} />

            <div>
                <SwitchToGraphPageButton windowWidth={windowWidth} />
            </div>
        </div>
    );
};
