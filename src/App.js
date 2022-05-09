import {Routes, Route, Navigate} from "react-router";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodesPage, LocationsPage, LoginPage, NotFoundPage, SingleCharacterPage} from "./pages";
import './App.css'

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'characters'}/>}/>
                <Route path={'characters'} element={<CharactersPage/>}/>
                <Route path={':id'} element={<SingleCharacterPage />}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'locations'} element={<LocationsPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};