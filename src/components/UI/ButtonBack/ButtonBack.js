import {useNavigate} from "react-router-dom";

import css from './ButtonBack.module.css';

export const ButtonBack = ({children, ...props}) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} {...props} className={css.btn_back}>
            {children}
        </button>
    );
};