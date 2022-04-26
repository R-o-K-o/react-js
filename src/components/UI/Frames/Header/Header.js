import classes from './Header.module.css';
import {Navbar} from "../Navbar/Navbar";

export const Header = () => {
    return (
        <header className={classes.header}>
            <Navbar />
        </header>
    );
};