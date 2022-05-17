import {ButtonBack} from "../UI";
import css from './CharacterDetails.module.css';

export const CharacterDetails = ({character: {name, gender, species, status, image, created}}) => {
    return (
        <div className={css.character_details}>
            <ButtonBack>back</ButtonBack>
            <div className={css.character_card}>
                <div className={css.character_img}>
                    <img src={image} alt="rick_and_morty_character"/>
                </div>
                <div className={css.character_info}>
                    <h2 className={css.character_name}>{name}</h2>
                    <div className={css.character_data}>
                        <ul className={css.hint}>
                            <li>name:</li>
                            <li>gender:</li>
                            <li>species:</li>
                            <li>status:</li>
                            <li>created:</li>
                        </ul>
                        <ul className={css.data}>
                            <li>{name}</li>
                            <li>{gender}</li>
                            <li>{species}</li>
                            <li>{status}</li>
                            <li>{created}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};