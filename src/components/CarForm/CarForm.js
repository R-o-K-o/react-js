import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import './CarForm.css';

import {carService} from "../../services";
import {carValidator} from "../../validators";

export const CarForm = ({setNewCar, carForUpdate}) => {
    const {register, handleSubmit, reset, setValue, formState:{errors}} = useForm({
        resolver:joiResolver(carValidator),
        mode: 'onTouched',
    });
    // const [error, setError] = useState(null);

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
                const {data} = await carService.updateBuId(carForUpdate.id, car);
                setNewCar(data);
                reset();
            }
            else {
                const {data} = await carService.create(car);
                setNewCar(data);
                reset();
            }
        }
        catch (err) {
            // setError(err.message);
        }
    };

    return (
        <>
            {/*{error && <h1 className="error">{error}</h1>}*/}
            <h1 className="title">page car</h1>
            <form onSubmit={handleSubmit(formSubmit)} className="car_form">
                <div>
                    <input type="text" placeholder="model" {...register('model')}/>
                </div>
                {errors.model && <span className="valid">{errors.model.message}</span>}
                <div>
                    <input type="text" placeholder="price" {...register('price',{valueAsNumber: true})}/>
                </div>
                {errors.price && <span className="valid">{errors.price.message}</span>}
                <div>
                    <input type="text" placeholder="year" {...register('year', {valueAsNumber: true})}/>
                </div>
                {errors.year && <span className="valid">{errors.year.message}</span>}
                <button className="form_btn">save</button>
            </form>
        </>
    );
};