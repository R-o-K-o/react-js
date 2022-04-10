import './UserDetails.css';
import {Address} from "../Address/Address";
import {Company} from "../Company/Company";

export const UserDetails = ({chosenUser, getUserPosts}) => {
    const {
        id,
        name,
        username,
        email,
        phone,
        website,
        address,
        company
    } = chosenUser;

    const choosePostsClick = () => getUserPosts(id);

    return (
        <div className="user_details_wrap wrap">
            <h1 className="title">user details</h1>
            <div className="user_details_card card">
                <h2 className="user-name">{name}</h2>
                <div className="user_info">
                    <div className="user_data">
                        <h3 className="subtitle">contact data</h3>
                        <div className="contact_data">
                            <ul className="hint">
                                <li>id:</li>
                                <li>nick:</li>
                                <li>phone:</li>
                                <li>email:</li>
                                <li>website</li>
                            </ul>
                            <ul className="data">
                                <li>{id}</li>
                                <li>{username}</li>
                                <li>{phone}</li>
                                <li>{email}</li>
                                <li>{website}</li>
                            </ul>
                        </div>
                    </div>
                    <Address address={address}/>
                    <Company company={company}/>
                </div>
            </div>
            <button
                    onClick={choosePostsClick}
                    className="user_details_btn"
            >
                user posts
            </button>
        </div>
    );
};