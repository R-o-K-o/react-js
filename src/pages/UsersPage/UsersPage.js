import {useEffect, useState} from "react";

import {userService} from "../../services";

import classes from './UsersPage.module.css';
import {MyLoader, Users} from "../../components";

export const UsersPage = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={classes.users_page}>
            {
                users
                    ? <Users users={users} />
                    : <MyLoader />
            }
        </div>
    );
};