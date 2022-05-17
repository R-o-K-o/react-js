import {Routes, Route, Navigate} from "react-router";

import {RequireAuth} from "./hoc";
import {MainLayout} from "./layouts";
import {
    HomePage,
    CharactersPage,
    SingleCharacterPage,
    EpisodesPage,
    SingleEpisodePage,
    EpisodeCharactersPage,
    LocationsPage,
    SingleLocationPage,
    LocationCharactersPage,
    LoginPage,
    NotFoundPage
} from "./pages";
import './App.css'

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'characters'} element={
                    <RequireAuth>
                        <CharactersPage/>
                    </RequireAuth>
                }/>
                <Route path={'character/:id'} element={<SingleCharacterPage/>}/>
                <Route path={'episodes'} element={
                    <RequireAuth>
                        <EpisodesPage/>
                    </RequireAuth>
                }/>
                <Route path={'episode/:id'} element={<SingleEpisodePage/>}/>
                <Route path={'episodic_characters'} element={<EpisodeCharactersPage/>}/>
                <Route path={'locations'} element={
                    <RequireAuth>
                        <LocationsPage/>
                    </RequireAuth>
                }/>
                <Route path={'location/:id'} element={<SingleLocationPage/>}/>
                <Route path={'location_characters'} element={<LocationCharactersPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};