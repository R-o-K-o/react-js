import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.my_loader}>
            <img className={css.loader}
                 src="https://www.svgrepo.com/show/327388/logo-react.svg"
                 alt="rect_logo"
            />
        </div>
    );
};