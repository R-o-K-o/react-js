import {LOAD_USER, LOAD_USERS} from "../actionTypes";

const initialState = {
    users: [],
    user: {},
};

export const usersReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_USERS:
            return {...state, users: payload};
        case LOAD_USER:
            return {...state, user: payload};
        default:
            return state;
    }
};