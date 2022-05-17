import css from './Button.module.css';

export const Button = ({children, ...props}) => {
    return (
        <button {...props} className={css.button}>
            {children}
        </button>
    );
};