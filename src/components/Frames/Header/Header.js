import {Navbar} from "../Navbar/Navbar";
import css from './Header.module.css';

export const Header = () => {
    return (
        <header className={css.header}>
            <Navbar/>
        </header>
    );
};