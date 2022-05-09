import {Footer, Header, Main} from "../../components";
import css from './MainLayout.module.css';

export const MainLayout = () => {
    return (
        <div className={css.main_layout}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};