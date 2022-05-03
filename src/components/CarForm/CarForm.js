import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";

import './CarForm.css';

export const CarForm = () => {
    const {formErrors} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();

    const formSubmit = (car) => {
        dispatch(carActions.create({car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)} className="car_form">
            <div><input type="text" {...register('model')} placeholder={'model'}/></div>
            {formErrors.model && <p className="form_err">{formErrors.model[0]}</p>}

            <div><input type="number" {...register('year')} placeholder={'year'}/></div>
            {formErrors.year && <p className="form_err">{formErrors.year[0]}</p>}

            <div><input type="number" {...register('price')} placeholder={'price'}/></div>
            {formErrors.price && <p className="form_err">{formErrors.price[0]}</p>}
            <button className="car_btn">save</button>
        </form>
    );
};