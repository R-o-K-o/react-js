import {Link} from "react-router-dom";

import {ButtonBack} from "../UI";
import css from './EpisodeDetails.module.css';

export const EpisodeDetails = ({episode}) => {
    const {name, air_date, episode: series_num, created} = episode;

    return (
        <div className={css.episode_details}>
            <ButtonBack>back</ButtonBack>
            <div className={css.episode_card}>
                <h2 className={css.episode_name}>{name}</h2>
                <div className={css.episode_data}>
                    <ul className={css.hint}>
                        <li>name:</li>
                        <li>air_data:</li>
                        <li>episode:</li>
                        <li>created:</li>
                    </ul>
                    <ul className={css.data}>
                        <li>{name}</li>
                        <li>{air_date}</li>
                        <li>{series_num}</li>
                        <li>{created}</li>
                    </ul>
                </div>
                <div className={css.link}>
                    <Link to={'/episodic_characters'} state={episode}>characters</Link>
                </div>
            </div>
        </div>
    );
};