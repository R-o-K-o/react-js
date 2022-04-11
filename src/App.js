import {useState} from "react";

import './App.css';
import {Users, UserDetails, UserPosts} from "./components";

import {postService, userService} from "./services";


export const App = () => {
    const [chosenUser, setChosenUser] = useState(null);
    const [chosenPosts, setChosenPosts] = useState(null);

    const chooseUser = async (id) => {
        const {data} = await userService.getById(id);
        setChosenUser(data);
    };

    const choosePosts = async (id) => {
        const {data} = await postService.getPostsByUserId(id);
        setChosenPosts(data);
    };

    return (
        <div className="container">
            <Users chooseUser={chooseUser} />
            {chosenUser && <UserDetails user={chosenUser} choosePosts={choosePosts} />}
            {chosenPosts && <UserPosts posts={chosenPosts} />}
        </div>
    );
};