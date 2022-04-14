import {useState} from "react";

import './App.css';
import {CarForm, Cars} from "./components";

export const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarUpdate] = useState(null);

    return (
        <>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} />
            <Cars newCar={newCar} setCarUpdate={setCarUpdate} />
        </>
    );
};