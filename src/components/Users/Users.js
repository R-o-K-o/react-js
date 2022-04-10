import './Users.css';
import {User} from "../User/User";

export const Users = ({users, getUserId}) => {
    return (
        <div className="users wrap">
            <h2 className="title">users list</h2>
            <div className="users_card card">
                {users.map(user =>
                    <User key={user.id}
                          user={user}
                          getUserId={getUserId}
                    />
                )}
            </div>
        </div>
    );
};