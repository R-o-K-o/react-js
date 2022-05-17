import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useCharacters, usePagination} from "../../hooks";
import {characterActions} from "../../redux";

import {Error} from "../Error/Error";
import {Character} from "../Character/Character";
import {CharacterFilter} from "../CharacterFilter/CharacterFilter";
import {Loader, Pagination} from "../UI";
import css from './Characters.module.css';

export const Characters = ({characters: episodeOrLocationCharacters}) => {
    const {characters, loading, error, prev, next} = useSelector(state => state.characters);
    const [searchQuery, setSearchQuery] = useState('');
    const [query, prevPage, nextPage] = usePagination();
    const characterList = !episodeOrLocationCharacters ? characters : episodeOrLocationCharacters;
    const foundCharacters = useCharacters(searchQuery, characterList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getAll({page: query.get('page')}));
    }, [query]);

    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <div className={css.characters}>
                        {
                            !episodeOrLocationCharacters
                                ? <CharacterFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                                : null
                        }
                        {
                            error || !foundCharacters.length
                                ? <Error error={!error ? 'not found' : error}/>
                                : <div className={css.character_cards}>
                                    {foundCharacters.map(characterItem =>
                                        <Character key={characterItem.id}
                                                   characterItem={characterItem}
                                        />)}
                                </div>
                        }
                        {
                            !episodeOrLocationCharacters && foundCharacters.length
                                ? <Pagination prev={prev}
                                              next={next}
                                              prevPage={prevPage}
                                              nextPage={nextPage}
                                  />
                                : null
                        }
                    </div>
            }
        </>
    );
};