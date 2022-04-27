import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import './Users.css';
import {User} from "../User/User";

import {userService} from "../../services";
import {LOADING_USERS} from "../../redux/actionCreators";

export const Users = () => {
    const {users} = useSelector(({users}) => users);
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAll().then(({data}) => dispatch(LOADING_USERS(data)));
    }, [dispatch]);

    return (
        <div className="users">
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};