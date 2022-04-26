import classes from './MainLayout.module.css';
import {Header, Main, Footer} from "../../components/UI/Frames";

export const MainLayout = () => {
    return (
        <div className={classes.page}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};