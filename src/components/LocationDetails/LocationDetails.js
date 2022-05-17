import {Link} from "react-router-dom";

import {ButtonBack} from "../UI";
import css from './LocationDetails.module.css';

export const LocationDetails = ({location}) => {
    const {name, type, dimension, created} = location;

    return (
        <div className={css.location_details}>
            <ButtonBack>back</ButtonBack>
            <div className={css.location_card}>
                <h2 className={css.location_name}>{name}</h2>
                <div className={css.location_data}>
                    <ul className={css.hint}>
                        <li>name:</li>
                        <li>type:</li>
                        <li>dimension:</li>
                        <li>created:</li>
                    </ul>
                    <ul className={css.data}>
                        <li>{name}</li>
                        <li>{type}</li>
                        <li>{dimension}</li>
                        <li>{created}</li>
                    </ul>
                </div>
                <div className={css.link}>
                    <Link to={'/location_characters'} state={location}>characters</Link>
                </div>
            </div>
        </div>
    );
};