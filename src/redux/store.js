import {combineReducers, configureStore} from "@reduxjs/toolkit";

import counterReducer from "./slices/counter.slice";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});