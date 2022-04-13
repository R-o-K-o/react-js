import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../services";

export const CarForm = ({setNewCar, carForUpdate}) => {
    const {register, handleSubmit, reset, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate]);

    const formSubmit = async (car) => {
        try {
            if (carForUpdate) {
                const {data} = await carService.updateById(carForUpdate.id, car);
                setNewCar(data);
                reset();
            }
            else {
                const {data} = await carService.create(car);
                setNewCar(data);
                reset();
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div><input type="text" placeholder="model" {...register('model')}/></div>
            <div><input type="text" placeholder="price" {...register('price')}/></div>
            <div><input type="text" placeholder="year" {...register('year')}/></div>
            <button className="form_btn">save</button>
        </form>
    );
};
