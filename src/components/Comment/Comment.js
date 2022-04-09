import './Comment.css';

export const Comment = ({comment: {id, name}}) => {
    return (
        <div className="comment">
            <h3 className="comment_title">
                {id}. <span>{name}</span>
            </h3>
        </div>
    );
};