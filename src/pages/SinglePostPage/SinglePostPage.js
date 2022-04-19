import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";

import {postService} from "../../services";

import classes from './SinglePostPage.css';
import {PostDetails} from "../../componets";

export const SinglePostPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            const {data} = postService.getById(id);
            setPost(data);
        } else setPost(state);
    }, [id, state]);

    return (
        <div className={classes.single_post_page}>
            <PostDetails post={post} />
        </div>
    );
};