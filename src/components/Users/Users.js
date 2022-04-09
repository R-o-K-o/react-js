import {useEffect, useState} from "react";

import './Users.css';
import {User} from "../User/User";
import {userService} from "../../services";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className="users_wrap wrap">
            <h1 className="title">users list</h1>
            <div className="users">
                {users.map(user =>
                    <User key={user.id} user={user} />)}
            </div>
        </div>
    );
};