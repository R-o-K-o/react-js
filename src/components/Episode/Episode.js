import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';

export const Episode = ({episode}) => {
    const {id, name} = episode;

    const navigate = useNavigate();
    const navToDetails = () => navigate(`/episode/${id}`, {state: episode});

    return (
        <div onClick={navToDetails} className={css.episode_card}>
            <h2 className={css.episode_name}>{name}</h2>
        </div>
    );
};