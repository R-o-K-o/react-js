import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {HomePage, NotFoundPage, SingleUserPage, UsersPage} from "./pages";

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<Navigate to={'home'} />}/>
                <Route path={'home'} element={<HomePage />}/>
                <Route path={'users'} element={<UsersPage />}/>
                <Route path={'users/:id'} element={<SingleUserPage />}/>
                <Route path={'*'} element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
};