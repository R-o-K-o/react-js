import {Link, NavLink} from "react-router-dom";

import css from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={css.navbar}>
            <div className={css.navbar_left}>
                <Link to={'/'}>
                    <div className={css.logo}>
                        <img className={css.logo_img}
                             src="https://rat.in.ua/wp-content/uploads/2019/11/6016-Rick-and-Morty-300x300.png"
                             alt="rick_and_morty_logo"/>
                        <div className={css.logo_name}>rick and morty</div>
                    </div>
                </Link>
            </div>
            <nav className={css.navigation}>
                <NavLink to={'characters'}>characters</NavLink>
                <NavLink to={'episodes'}>episodes</NavLink>
                <NavLink to={'locations'}>locations</NavLink>
            </nav>
            <div className={css.navbar_right}>
                <button className={css.log_out_btn}>logout</button>
            </div>
        </div>
    );
};