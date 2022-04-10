import {useEffect, useState} from "react";

import './App.css'
import {Users, UserDetails, UserPosts} from "./components";

import {userService} from "./services";


export const App = () => {
    const [users, setUsers] = useState([]);
    const [chosenUser, setChosenUser] = useState(null);
    const [chosenPosts, setChosenPosts] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    const getUserId = async (id) => {
        const {data} = await userService.getById(id);
        setChosenUser(data);
    };

    const getUserPosts = async (id) => {
        const {data} = await userService.getPostsById(id);
        setChosenPosts(data);
    };

    return (
        <div className="container">
            <Users users={users} getUserId={getUserId} />
            {chosenUser && <UserDetails chosenUser={chosenUser} getUserPosts={getUserPosts} />}
            {chosenPosts && <UserPosts chosenPosts={chosenPosts} />}
        </div>
    );
};