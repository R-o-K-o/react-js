import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usePagination} from "../../hooks";
import {locationAction} from "../../redux";

import {Error} from "../Error/Error";
import {Location} from "../Location/Location";
import {Loader, Pagination} from "../UI";
import css from './Locations.module.css';

export const Locations = () => {
    const {locations, loading, error, prev, next} = useSelector(state => state.locations);
    const [query, prevPage, nextPage] = usePagination();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(locationAction.getAll({page: query.get('page')}));
    }, [query]);

    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <div className={css.locations}>
                        {
                            error
                                ? <Error error={error}/>
                                : <>
                                    <div className={css.location_cards}>
                                        {locations.map(location =>
                                            <Location key={location.id}
                                                      location={location}
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