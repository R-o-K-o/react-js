import css from './Pagination.module.css';

export const Pagination = ({prev, next, prevPage, nextPage}) => {
    return (
        <div className={css.pagination}>
            <div className={css.buttons}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};