import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.my_loader}>
            <img className={css.loader}
                 src="https://angular.github.io/react-native-renderer/assets/react.png"
                 alt="rect_logo"
            />
        </div>
    );
};
