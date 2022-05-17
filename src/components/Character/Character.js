import {useNavigate} from "react-router-dom";

import css from './Character.module.css';

export const Character = ({characterItem}) => {
    const {id, name, image} = characterItem;

    const navigate = useNavigate();
    const navToDetails = () => navigate(`/character/${id}`, {state: characterItem});

    return (
        <div onClick={navToDetails} className={css.character_card}>
            <div className={css.character_img}>
                <img src={image} alt="rick_and_morty_character"/>
            </div>
            <h2 className={css.character_name}>{name}</h2>
        </div>
    );
};