import {useState} from "react";

import './App.css';
import {CarForm, Cars} from "./components";


export const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div className="container">
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} />
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} />
        </div>
    );
};