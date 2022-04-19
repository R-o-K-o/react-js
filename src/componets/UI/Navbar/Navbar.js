import {NavLink} from "react-router-dom";

import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.logo}>react app</div>
            <div className={classes.navigate}>
                <ul className={classes.links}>
                    <li><NavLink to={'home'}>home</NavLink></li>
                    <li><NavLink to={'users'}>users</NavLink></li>
                    <li><NavLink to={'posts'}>posts</NavLink></li>
                </ul>
            </div>
        </div>
    );
};