import classes from './Users.module.css';
import {User} from "../User/User";
import {MyButton} from "../UI";

export const Users = ({users}) => {
    return (
        <div className={classes.users}>
            <div className={classes.users_cards}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={classes.buttons}>
                <MyButton>prev</MyButton>
                <MyButton>next</MyButton>
            </div>
        </div>
    );
};