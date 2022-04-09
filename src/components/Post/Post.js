import './Post.css';

export const Post = ({post: {id, title}}) => {
    return (
        <div className="post">
            <h3 className="post_title">
                {id}. <span>{title}</span>
            </h3>
        </div>
    );
};