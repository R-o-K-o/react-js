import {Outlet} from "react-router-dom";

import classes from './Posts.module.css';
import {Post} from "../Post/Post";

export const Posts = ({posts, nextPage, prevPage, page}) => {
    return (
        <div className={classes.posts_wrap}>
            <div className={classes.posts_content}>
                <div className={classes.posts_cards}>
                    {posts.map(post => <Post key={post.id} post={post} />)}
                </div>
                <div className={classes.buttons}>
                    <button disabled={page <= 1}
                            onClick={() => prevPage()}
                            className={classes.btn_prev}
                    >
                        prev
                    </button>
                    <button
                        disabled={page >= 15}
                        onClick={() => nextPage()}
                        className={classes.btn_next}
                    >
                        next
                    </button>
                </div>
            </div>
            <div className={classes.post_details}>
                <Outlet />
            </div>
        </div>
    );
};