import './User.css';

export const User = ({user: {id, name}, getUserId}) => {
    const chooseUserClick = () => getUserId(id);

    return (
        <div className="user">
            <h3 className="user_name">
                {id}. {name}
            </h3>
            <button
                onClick={chooseUserClick}
                className="user_btn"
            >
                details
            </button>
        </div>
    );
};