import {Characters} from "../../components";
import css from './CharactersPage.module.css';

export const CharactersPage = () => {
    return (
        <div className={css.characters_page}>
            <h1 className={css.title}>character list</h1>
            <Characters/>
        </div>
    );
};