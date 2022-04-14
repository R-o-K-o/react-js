import './Car.css';

export const Car = ({car, deleteCar, setCarUpdate}) => {
    const {id, model, price, year} = car;

    return (
        <div className="car">
            <h3 className="car_model">{model}</h3>
            <div className="car_info">
                <ul className="hint">
                    <li>price: </li>
                    <li>year: </li>
                </ul>
                <ul className="data">
                    <li>{price} $</li>
                    <li>{year}</li>
                </ul>
            </div>
            <div className="car_buttons">
                <button onClick={() => deleteCar(id)} className="delete_btn">delete</button>
                <button onClick={() => setCarUpdate(car)} className="update_btn">update</button>
            </div>
        </div>
    );
};