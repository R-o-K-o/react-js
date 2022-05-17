import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usePagination} from "../../hooks";
import {episodeActions} from "../../redux";

import {Error} from "../Error/Error"
import {Episode} from "../Episode/Episode";
import {Loader, Pagination} from "../UI";
import css from './Episodes.module.css';

export const Episodes = () => {
    const {episodes, loading, error, prev, next} = useSelector(state => state.episodes);
    const [query, prevPage, nextPage] = usePagination();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll({page: query.get('page')}));
    }, [query]);

    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <div className={css.episodes}>
                        {
                            error
                                ? <Error error={error}/>
                                : <>
                                    <div className={css.episode_cards}>
                                        {episodes.map(episode =>
                                            <Episode key={episode.id}
                                                     episode={episode}
                                            />)}
                                    </div>
                                    <Pagination prev={prev}
                                                next={next}
                                                prevPage={prevPage}
                                                nextPage={nextPage}
                                    />
                                </>
                        }
                    </div>
            }
        </>
    );
};
