import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {characterReducer} from "../slices";

const rootReducer = combineReducers({
    characters: characterReducer,
});

export const store = configureStore({reducer: rootReducer});