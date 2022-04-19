import classes from './Address.module.css';
import {Geo} from "../Geo/Geo";

export const Address = ({address: {city, street, suite, zipcode, geo}}) => {
    return (
        <>
            <div className={classes.address_data}>
                <h3 className={classes.subtitle}>address data</h3>
                <div className={classes.content}>
                    <ul className={classes.hint}>
                        <li>city:</li>
                        <li>street:</li>
                        <li>suite:</li>
                        <li>zipcode:</li>
                    </ul>
                    <ul className={classes.data}>
                        <li>{city}</li>
                        <li>{street}</li>
                        <li>{suite}</li>
                        <li>{zipcode}</li>
                    </ul>
                </div>
            </div>
            <Geo geo={geo} />
        </>
    );
};