import {Outlet} from "react-router-dom";

import css from './Main.module.css';

export const Main = () => {
    return (
        <main className={css.content}>
            <Outlet/>
        </main>
    );
};