import {useEffect, useState} from "react";

import './Posts.css';
import {Post} from "../Post/Post";
import {postService} from "../../services";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className="posts_wrap wrap">
            <h2 className="title">user posts</h2>
            <div className="posts">
                {posts.map(post =>
                    <Post key={post.id} post={post} />)}
            </div>
        </div>
    );
};