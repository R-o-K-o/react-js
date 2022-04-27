import {useDispatch, useSelector} from "react-redux";

import './Counter.css';
import {counterActions} from "../../redux";

export const Counter = () => {
    const {count1, count2} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="counters">
            <div className="wrap">
                <div className="first_counter counter">
                    <h2 className="title">counter 1</h2>
                    <h3 className="value">{count1}</h3>
                    <div className="buttons">
                        <button onClick={() => dispatch(counterActions.incCount1())}>increment</button>
                        <button onClick={() => dispatch(counterActions.decCount1())}>decrement</button>
                        <button onClick={() => dispatch(counterActions.resetCount1())}>reset</button>
                    </div>
                </div>
                <div className="second_counter counter">
                    <h2 className="title">counter 2</h2>
                    <h3 className="value">{count2}</h3>
                    <div className="buttons">
                        <button onClick={() => dispatch(counterActions.incCount2())}>increment</button>
                        <button onClick={() => dispatch(counterActions.decCount2())}>decrement</button>
                        <button onClick={() => dispatch(counterActions.resetCount2())}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};