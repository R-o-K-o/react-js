import {useEffect, useState} from "react";

import './Comments.css';
import {Comment} from "../Comment/Comment";
import {commentService} from "../../services";

export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data));
    }, []);

    return (
        <div className="comments_wrap wrap">
            <h2 className="title">comments on post</h2>
            <div className="comments">
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </div>
        </div>
    );
};