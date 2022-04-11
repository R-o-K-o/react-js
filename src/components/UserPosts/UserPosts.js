import './UserPosts.css';
import {UserPost} from "../UserPost/UserPost";

export const UserPosts = ({posts}) => {
    return (
        <div className="user_posts wrap">
            <h2 className="title">user posts</h2>
            <div className="posts_cards">
                {posts.map(post => <UserPost key={post.id} post={post} />)}
            </div>
        </div>
    );
};