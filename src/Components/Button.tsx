import React from "react";
import { useNavigate } from "react-router-dom";

type AktualliesierungsButton = {
    checkInfo: () => void;
    windowWidth: number
};
type SwitchToGraphPageButtonType = {
    windowWidth: number;
}

export const AktualliesierungsButton: React.FC<AktualliesierungsButton> = ({ checkInfo, windowWidth }) => {
    return (
        <div>
            <button
                onClick={() => {
                    checkInfo();
                }}
                style={{
                    borderRadius: 20,
                    float: "left",
                    marginLeft: windowWidth / 4,
                    marginTop: 40,
                }}
            >
                <h3>Aktualisieren</h3>
            </button>
        </div>
    );
};

export const SwitchToGraphPageButton: React.FC<SwitchToGraphPageButtonType> = ({ windowWidth }) => {
    const navigation = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigation("/graph");
                }}
                style={{
                    borderRadius: 20,
                    float: "left",
                    marginLeft: windowWidth / 6,
                    marginTop: 40,
                }}
            >
                <h3>Zur Graphischen Übersicht</h3>
            </button>
        </div> 
    );
};

export const MainPageButton: React.FC = () => {
    const navigation = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigation("/")
                }}
                style={{
                    borderRadius: 20,
                    marginTop: 40,
                }}
            >
                <h3>Zur Übersichts Seite</h3>
            </button>
        </div>
    )
}
