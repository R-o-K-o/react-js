import css from './CharacterFilter.module.css';

export const CharacterFilter = ({searchQuery, setSearchQuery}) => {
    const inputHandler = (e) => setSearchQuery(e.target.value);

    return (
        <div className={css.character_filter}>
            <input value={searchQuery}
                   onChange={inputHandler}
                   type="text"
                   placeholder="search. . ."
            />
        </div>
    );
};