import {Link} from "react-router-dom";

import classes from './MyLinkButton.module.css';

export const MyLinkButton = ({to, state, children, ...props}) => {
    return (
        <Link to={to} state={state}>
            <button {...props} className={classes.my_link_button}>
                {children}
            </button>
        </Link>
    );
};