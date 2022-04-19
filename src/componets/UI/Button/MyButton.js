import {Link} from "react-router-dom";

import classes from './MyButton.module.css';

export const MyButton = ({to, state, children, ...props}) => {
    return (
        <Link to={to} state={state}>
            <button {...props} className={classes.my_button}>
                {children}
            </button>
        </Link>
    );
};