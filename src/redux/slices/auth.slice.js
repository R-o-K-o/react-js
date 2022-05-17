import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.isAuth = false;
            localStorage.removeItem('user');
        },
    }
});

const {reducer: authReducer, actions: {login, logout}} = authSlice;

const authActions = {
    login,
    logout,
};

export {authReducer, authActions};