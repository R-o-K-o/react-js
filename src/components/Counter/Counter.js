import {useDispatch, useSelector} from "react-redux";

import './Counter.css';
import {DECREMENT, INCREMENT, RESET, SET_VALUE} from "../../redux/actionCreators";

export const Counter = () => {
    const state = useSelector(({counter}) => counter);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1 className="num">{state.counter}</h1>
            <div className="buttons">
                <button onClick={() => dispatch(INCREMENT())}>increment</button>
                <button onClick={() => dispatch(DECREMENT())}>decrement</button>
                <button onClick={() => dispatch(SET_VALUE(777))}>set value</button>
                <button onClick={() => dispatch(RESET())}>reset</button>
            </div>
        </div>
    );
};