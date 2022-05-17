import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {characterService} from "../../services";

import {ButtonBack, Characters} from "../../components";
import css from './LocationCharactersPage.module.css';

export const LocationCharactersPage = () => {
    const {state: {name, residents}} = useLocation();
    const [locationCharacters, setLocationCharacters] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        if (residents.length) {
            characterService.getByCharacterList(residents).then(({data}) => {
                if (!data.length) {
                    setLocationCharacters([data]);
                } else {
                    setLocationCharacters(data);
                }
            });
        } else {
            setText('characters not found');
        }
    }, []);

    return (
        <div className={css.location_characters_page}>
            <ButtonBack>back</ButtonBack>
            <h1 className={css.title}>
                {!text ? <>characters from the location<span>'{name}'</span></> : text}
            </h1>
            <Characters characters={locationCharacters}/>
        </div>
    );
};