import {Button} from "../Button/Button";
import css from './Pagination.module.css';

export const Pagination = ({prev, next, prevPage, nextPage}) => {
    return (
        <div className={css.pagination}>
            <div className={css.buttons}>
                <Button disabled={!prev} onClick={prevPage}>prev</Button>
                <Button disabled={!next} onClick={nextPage}>next</Button>
            </div>
        </div>
    );
};