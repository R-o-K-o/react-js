import {useNavigate} from "react-router-dom";

import css from './Location.module.css';

export const Location = ({location}) => {
    const {id, name} = location;

    const navigate = useNavigate();
    const navToDetails = () => navigate(`/location/${id}`, {state: location});

    return (
        <div onClick={navToDetails} className={css.location_card}>
            <h2 className={css.location_name}>{name}</h2>
        </div>
    );
};
