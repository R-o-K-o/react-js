import './Geo.css';

export const Geo = ({geo: {lat, lng}}) => {
    return (
        <div className="geo">
            <h3 className="subtitle">geo data</h3>
            <div className="geo_data">
                <ul className="hint">
                    <li>latitude:</li>
                    <li>longitude:</li>
                </ul>
                <ul className="data">
                    <li>{lat}</li>
                    <li>{lng}</li>
                </ul>
            </div>
        </div>
    );
};