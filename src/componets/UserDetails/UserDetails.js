import classes from './UserDetails.module.css';
import {Address} from "../Address/Address";
import {Company} from "../Company/Company";

export const UserDetails = ({user}) => {
    const {
        id,
        name,
        username,
        email,
        phone,
        website,
        address,
        company
    } = user;

    return (
        <div className={classes.user_details}>
            <h2 className={classes.user_name}>{name}</h2>
            <div className={classes.user_data}>
                <div className={classes.contact_data}>
                    <h3 className={classes.subtitle}>contact data</h3>
                    <div className={classes.content}>
                        <ul className={classes.hint}>
                            <li>id:</li>
                            <li>nick:</li>
                            <li>phone:</li>
                            <li>email:</li>
                            <li>website</li>
                        </ul>
                        <ul className={classes.data}>
                            <li>{id}</li>
                            <li>{username}</li>
                            <li>{phone}</li>
                            <li>{email}</li>
                            <li>{website}</li>
                        </ul>
                    </div>
                </div>
                <Address address={address} />
                <Company company={company} />
            </div>
        </div>
    );
};