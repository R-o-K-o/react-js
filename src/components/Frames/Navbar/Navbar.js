import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {authActions} from "../../../redux";

import {Button} from "../../UI";
import css from './Navbar.module.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuth = localStorage.getItem('user');

    const logOut = () => {
        if (isAuth) {
            dispatch(authActions.logout());
        } else {
            navigate('/login');
        }
    };

    return (
        <div className={css.navbar}>
            <div className={css.navbar_left}>
                <Link to={'/characters'}>
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
                <NavLink to={'home'}>home</NavLink>
            </nav>
            <div className={css.navbar_right}>
                <Button onClick={logOut}>{!isAuth ? 'login' : 'logout'}</Button>
            </div>
        </div>
    );
};