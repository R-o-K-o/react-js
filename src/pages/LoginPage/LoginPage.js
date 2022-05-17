import {AuthForm} from "../../components";
import css from './LoginPage.module.css';

export const LoginPage = () => {
    return (
        <div className={css.login_page}>
            <h1 className={css.title}>authorization</h1>
            <AuthForm/>
        </div>
    );
};