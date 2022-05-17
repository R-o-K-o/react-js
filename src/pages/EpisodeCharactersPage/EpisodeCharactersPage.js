import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {characterService} from "../../services";

import {ButtonBack, Characters} from "../../components";
import css from './EpisodeCharactersPage.module.css';

export const EpisodeCharactersPage = () => {
    const {state: {name, characters}} = useLocation();
    const [episodeCharacters, setEpisodeCharacters] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        if (characters.length) {
            characterService.getByCharacterList(characters).then(({data}) => {
                if (!data.length) {
                    setEpisodeCharacters([data]);
                } else {
                    setEpisodeCharacters(data);
                }
            });
        } else {
            setText('characters not found');
        }
    }, []);

    return (
        <div className={css.episode_characters_page}>
            <ButtonBack>back</ButtonBack>
            <h1 className={css.title}>
                {!text ? <>characters from the episode<span>'{name}'</span></> : text}
            </h1>
            <Characters characters={episodeCharacters}/>
        </div>
    );
};