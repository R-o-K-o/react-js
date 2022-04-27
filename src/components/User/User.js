import './User.css';

export const User = ({user}) => {
    const {name} = user;

    return (
        <div className="user">
            <h2 className="user_name">{name}</h2>
        </div>
    );
};