import './User.css';

export const User = ({user: {id, name}}) => {
    return (
        <div className="user">
            <h3 className="user_name">{id}. {name}</h3>
        </div>
    );
};