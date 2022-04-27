import './App.css'
import {Counter, Users} from "./components";

export const App = () => {
    return (
        <div className="container">
            <Counter />
            <Users />
        </div>
    );
};