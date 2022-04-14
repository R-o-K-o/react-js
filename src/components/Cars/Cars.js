import {useEffect, useState} from "react";

import './Cars.css';
import {Car} from "../Car/Car";

import {carService} from "../../services";

export const Cars = ({newCar, setCarUpdate}) => {
    const [cars, setCars] = useState([]);
    const [deleteCarId, setDeleteCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [newCar, deleteCarId]);

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        setDeleteCarId(id);
    };

    if (!cars.length) return  <h2 className="title">no cars found</h2>

    return (
        <>
            <h2 className="title">car list</h2>
            <div className="cars">
                {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} setCarUpdate={setCarUpdate} />)}
            </div>
        </>
    );
};