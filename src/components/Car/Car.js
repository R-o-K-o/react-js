import './Car.css';

export const Car = ({car: {model, price, year}}) => {
    return (
        <div className="car">
            <h2 className="car_model">{model}</h2>
            <div className="car_info">
                <ul className="hint">
                    <li>year:</li>
                    <li>price:</li>
                </ul>
                <ul className="data">
                    <li>{year}</li>
                    <li>{price} $</li>
                </ul>
            </div>
        </div>
    );
};