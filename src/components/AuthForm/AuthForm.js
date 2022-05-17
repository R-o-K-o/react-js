import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {authActions} from "../../redux";

import {Button} from "../UI";
import css from './AuthForm.module.css';

export const AuthForm = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const logIn = (data) => {
        try {
            dispatch(authActions.login(data));
            navigate(state.pathname, {replace: true});
            reset();

        } catch (err) {
            navigate('/characters');
        }
    };

    return (
        <form onSubmit={handleSubmit(logIn)} className={css.login_form}>
            <input {...register('username')} type="text" placeholder="username"/>
            <input {...register('password')} type="password" placeholder="password"/>
            <Button>login</Button>
        </form>
    );
};