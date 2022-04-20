import classes from './MyButton.module.css';

export const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.my_button}>
            {children}
        </button>
    );
};