import {Outlet} from "react-router-dom";

import classes from './Main.module.css';

export const Main = () => {
    return (
        <main className={classes.content}>
            <Outlet />
        </main>
    );
};