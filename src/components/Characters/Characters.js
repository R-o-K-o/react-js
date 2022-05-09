import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {characterActions} from "../../redux";

import {Character} from "../Character/Character";
import {Loader, Pagination} from "../UI";
import css from './Characters.module.css';

export const Characters = () => {
    const {characters, loading, prev, next} = useSelector(state => state.characters);
    const [query, setQuery] = useSearchParams({page: '1'});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getAll({page: query.get('page')}));
    }, [query]);

    const nextPage = () => {
        const next = +query.get('page') + 1;
        setQuery({page: `${next}`});
    };

    const prevPage = () => {
        const prev = +query.get('page') - 1;
        setQuery({page: `${prev}`});
    };

    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <div className={css.characters}>
                        <h1 className={css.title}>character list</h1>
                        <div className={css.character_cards}>
                            {characters.map(character => <Character key={character.id} character={character}/>)}
                        </div>
                        <Pagination prev={prev}
                                    next={next}
                                    prevPage={prevPage}
                                    nextPage={nextPage}/>
                    </div>
            }
        </>
    );
};