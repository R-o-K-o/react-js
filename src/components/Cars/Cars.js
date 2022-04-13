import {useEffect, useState} from "react";

import {Car} from "../Car/Car";

import {carService} from "../../services";

export const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    const [deleteCarId, setDeleteCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [newCar, deleteCarId]);

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        setDeleteCarId(id);
    };

    return (
        <div className="cars">
            {cars.map(car =>
                <Car key={car.id}
                     car={car}
                     deleteCar={deleteCar}
                     setCarForUpdate={setCarForUpdate}
                />
            )}
        </div>
    );
};