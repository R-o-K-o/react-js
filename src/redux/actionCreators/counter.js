import {DEC, INC, RES, SET} from "../actionTypes";

export const INCREMENT = () => ({type: INC});
export const DECREMENT = () => ({type: DEC});
export const RESET = () => ({type: RES});
export const SET_VALUE = (payload) => ({type: SET, payload});