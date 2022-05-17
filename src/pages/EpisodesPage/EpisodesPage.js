import {Episodes} from "../../components";
import css from './EpisodesPage.module.css';

export const EpisodesPage = () => {
    return (
        <div className={css.episodes_page}>
            <h1 className={css.title}>episode list</h1>
            <Episodes />
        </div>
    );
};