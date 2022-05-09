import {useNavigate} from "react-router-dom";

import css from './Character.module.css';

export const Character = ({character}) => {
    const {id, name, image} = character;

    const navigate = useNavigate();
    const navToDetails = () => navigate(`/${id}`, {state: character})

    return (
        <div onClick={navToDetails} className={css.character}>
            <div className={css.character_img}>
                <img src={image} alt={`character: ${name}`}/>
            </div>
            <h2 className={css.character_name}>{name}</h2>
        </div>
    );
};