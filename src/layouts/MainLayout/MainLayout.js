import {Outlet} from "react-router-dom";

import classes from './MainLayout.module.css';
import {Header} from "../../components";

export const MainLayout = () => {
    return (
        <div className={classes.main_layout}>
            <Header />
            <Outlet />
        </div>
    );
};