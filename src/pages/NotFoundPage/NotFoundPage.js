import css from './NotFoundPage.module.css';

export const NotFoundPage = () => {
    return (
        <div className={css.not_found_page}>
            <h1 className={css.title}>not found page</h1>
            <img className={css.err_img}
                 src="https://stories.freepiklabs.com/storage/23081/404-error-pana-2761.png"
                 alt="error 404"
            />
        </div>
    );
};