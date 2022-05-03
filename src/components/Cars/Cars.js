import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";

import './Cars.css';
import {Car} from "../Car/Car";
import {MyLoader} from "../UI";

export const Cars = () => {
    const {cars, status, loading} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, []);

    if (status === 'error') return <h1 className="cars_title error">{status} 404</h1>

    return (
        <>
            {loading && <MyLoader />}
            <div className="cars">
                <h1 className="cars_title">car list</h1>
                <div className="cars_cards">
                    {cars.map(car => <Car key={car.id} car={car} />)}
                </div>
            </div>
        </>
    );
};