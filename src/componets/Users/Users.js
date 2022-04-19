import {Outlet} from "react-router-dom";

import classes from './Users.module.css';
import {User} from "../User/User";

export const Users = ({users, page, nextPage, prevPage}) => {
    return (
        <div className={classes.users_wrap}>
            <div className={classes.users_content}>
                <div className={classes.users_cards}>
                    {users.map(user => <User key={user.id} user={user} />)}
                </div>
                <div className={classes.buttons}>
                    <button disabled={page <= 1}
                            onClick={() => prevPage()}
                            className={classes.btn_prev}
                    >
                        prev
                    </button>
                    <button
                        disabled={page >= 2}
                        onClick={() => nextPage()}
                        className={classes.btn_next}
                    >
                        next
                    </button>
                </div>
            </div>
            <div className={classes.user_details}>
                <Outlet/>
            </div>
        </div>
    );
};