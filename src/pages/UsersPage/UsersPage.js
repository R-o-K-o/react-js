import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {userService} from "../../services";

import classes from './UsersPage.module.css';
import {Users, MyLoader} from "../../componets";

export const UsersPage = () => {
    const [users, setUsers] = useState(null);
    const [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');

    useEffect(() => {
        userService.getAll(query.get('page')).then(({data}) => setUsers(data));
    }, [query]);

    const nextPage = () => {
        page = +page + 1;
        setQuery({page: page.toString()});
    };

    const prevPage = () => {
        page = +page - 1;
        setQuery({page: page.toString()});
    };

    return (
        <div className={classes.users_page}>
            {
                users
                    ? <Users users={users}
                             page={page}
                             nextPage={nextPage}
                             prevPage={prevPage}/>
                    : <MyLoader />
            }
        </div>
    );
};