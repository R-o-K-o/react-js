import {Routes, Route, Navigate} from "react-router-dom";

import './App.css'
import {MainLayout} from "./layouts";
import {HomePage, UsersPage, PostsPage, SinglePostPage, SingleUserPage, NotFoundPage} from "./pages";

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<Navigate to={'home'} />}/>
                <Route path={'home'} element={<HomePage />}/>
                <Route path={'users'} element={<UsersPage />}>
                    <Route path={':id'} element={<SingleUserPage />}/>
                </Route>
                <Route path={'posts'} element={<PostsPage />}>
                    <Route path={':id'} element={<SinglePostPage />}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
};