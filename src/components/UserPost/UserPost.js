import './UserPost.css';

export const UserPost = ({post: {title}}) => {
    return (
        <div className="post card">
            <h2 className="post_title">{title}</h2>
        </div>
    );
};