type PannelType = {
    name: string;
    windowWidth: number;
    localTemp: number;
    localHumid: number;
};

export const Pannel: React.FC<PannelType> = ({ name, localTemp, localHumid, windowWidth }) => {
    return (
        <div style={{
            width: windowWidth / 2,
            backgroundColor: localHumid > 60 ? "lightsalmon" : "white",
            float: "left",
            borderRadius: 10,
            borderColor: "block",
        }}>
            <h2>{name} info: </h2>
            <h3>Temperatur: {localTemp}°C</h3>
            <h3>Humidity: {localHumid}%</h3>
        </div>
    );
};