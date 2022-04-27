import {INC, DEC, RES, SET} from "../actionTypes";

const initialState = {
    counter: 0
};

export const counterReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case INC:
            return {...state, counter: state.counter + 1};
        case DEC:
            return {...state, counter: state.counter - 1};
        case RES:
            return {...state, counter: 0};
        case SET:
            return {...state, counter: payload};
        default:
            return state;
    }
};