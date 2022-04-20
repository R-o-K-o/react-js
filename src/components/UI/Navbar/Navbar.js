import {NavLink} from "react-router-dom";

import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>create react app</div>
            <div className={classes.navigate}>
                <ul className={classes.links}>
                    <li><NavLink to={'home'}>home</NavLink></li>
                    <li><NavLink to={'users'}>users</NavLink></li>
                    <li>
                        <button className={classes.log_out_btn}>log out</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};