import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {characterActions} from "../../redux";

import {CharacterDetails} from "../../components";
import css from './SingleCharacterPage.module.css';

export const SingleCharacterPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const {character} = useSelector(stata => stata.characters);
    const [characterItem, setCharacterItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!state) {
            dispatch(characterActions.getById({id}));
        } else {
            setCharacterItem(state);
        }
    }, [id, state]);

    return (
        <div className={css.single_character_page}>
            <h1 className={css.title}>character details</h1>
            <CharacterDetails character={!characterItem ? character : characterItem}/>
        </div>
    );
};