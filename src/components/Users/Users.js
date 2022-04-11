import {useEffect, useState} from "react";

import './Users.css';
import {User} from "../User/User";

import {userService} from "../../services";

export const Users = ({chooseUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className="users wrap">
            <h2 className="title">users list</h2>
            <div className="users_card card">
                {users.map(user =>
                    <User key={user.id}
                          user={user}
                          chooseUser={chooseUser}
                    />
                )}
            </div>
        </div>
    );
};