import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";

import {userService} from "../../services";

import classes from './SingleUserPage.css';
import {UserDetails} from "../../componets";

export const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            const {data} = userService.getById(id);
            setUser(data);
        } else setUser(state);
    }, [id, state]);

    return (
        <div className={classes.single_user_page}>
            <UserDetails user={user} />
        </div>
    );
};