import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, characterReducer, episodeReducer, locationReducer} from "../slices";

const rootReducer = combineReducers({
    characters: characterReducer,
    episodes: episodeReducer,
    locations: locationReducer,
    auth: authReducer,
});

export const store = configureStore({reducer: rootReducer});