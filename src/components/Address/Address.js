import './Address.css';
import {Geo} from "../Geo/Geo";

export const Address = ({address: {city, street, suite, zipcode, geo}}) => {
    return (
        <div className="user_address">
            <h3 className="subtitle">address data</h3>
            <div className="address_data">
                <ul className="hint">
                    <li>city:</li>
                    <li>street:</li>
                    <li>suite:</li>
                    <li>zipcode:</li>
                </ul>
                <ul className="data">
                    <li>{city}</li>
                    <li>{street}</li>
                    <li>{suite}</li>
                    <li>{zipcode}</li>
                </ul>
            </div>
            <Geo geo={geo}/>
        </div>
    );
};