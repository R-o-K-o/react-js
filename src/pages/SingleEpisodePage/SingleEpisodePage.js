import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {episodeActions} from "../../redux";

import {EpisodeDetails} from "../../components";
import css from './SingleEpisodePage.module.css';

export const SingleEpisodePage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const {episode} = useSelector(state => state.episodes);
    const [episodeItem, setEpisodeItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!state) {
            dispatch(episodeActions.getById({id}));
        } else {
            setEpisodeItem(state);
        }
    }, [id, state]);

    return (
        <div className={css.single_episode_page}>
            <h1 className={css.title}>episode details</h1>
            <EpisodeDetails episode={!episodeItem ? episode : episodeItem}/>
        </div>
    );
};
