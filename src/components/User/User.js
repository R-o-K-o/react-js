import classes from  './User.module.css';
import {MyLinkButton} from "../UI";

export const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={classes.user}>
            <h2 className={classes.user_name}>{name}</h2>
            <MyLinkButton to={id.toString()} state={user}>details</MyLinkButton>
        </div>
    );
};