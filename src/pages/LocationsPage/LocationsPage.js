import {Locations} from "../../components";
import css from './LocationsPage.module.css';

export const LocationsPage = () => {
    return (
        <div className={css.locations_page}>
            <h1 className={css.title}>location list</h1>
            <Locations />
        </div>
    );
};