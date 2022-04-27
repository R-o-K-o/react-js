import {createStore, combineReducers} from "redux";

import {usersReducer, counterReducer} from "../reducers";

export const rootReducer = combineReducers({
    users: usersReducer,
    counter: counterReducer,
});

export const store = createStore(rootReducer);