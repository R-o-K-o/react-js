import css from './SingleCharacterPage.module.css';
import {useLocation, useParams} from "react-router";
import {useEffect} from "react";

export const SingleCharacterPage = () => {
    // {id, name, gender, species, status, image}
    const {state} = useLocation();
    const {id} = useLocation();

    useEffect(() => {

    }, []);

    return (
        <div className={css.single_character_page}>
            SingleCharacterPage
        </div>
    );
};