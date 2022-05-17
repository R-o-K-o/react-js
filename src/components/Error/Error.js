import css from './Error.module.css';

export const Error = ({error}) => {
    return (
        <h1 className={css.error_msg}>
            {error}
        </h1>
    );
};