import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {locationAction} from "../../redux";

import {LocationDetails} from "../../components";
import css from './SingleLocationPage.module.css';

export const SingleLocationPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const {location} = useSelector(state => state.locations);
    const [locationItem, setLocationItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!state) {
            dispatch(locationAction.getById({id}));
        } else {
            setLocationItem(state);
        }
    }, [id, state]);

    return (
        <div className={css.single_location_page}>
            <h1 className={css.title}>location details</h1>
            <LocationDetails location={!locationItem ? location : locationItem}/>
        </div>
    );
};