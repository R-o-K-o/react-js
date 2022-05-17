import {Navigate, useLocation} from "react-router-dom";

export const RequireAuth = ({children}) => {
    const location = useLocation();

    if (!localStorage.getItem('user')) {
        return <Navigate to={'/login'} state={location}/>
    }

    return children;
};