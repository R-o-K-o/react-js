export const Car = ({car, deleteCar, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    return (
        <div className="car">
            <h3>{model}</h3>
            <p>price: {price}</p>
            <p>year:  {year}$</p>
            <div className="buttons">
                <button onClick={() => deleteCar(id)}>delete</button>
                <button onClick={() => setCarForUpdate(car)}>update</button>
            </div>
        </div>
    );
};