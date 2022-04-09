import './App.css'
import {Comments, Posts, Users} from "./components";

export const App = () => {
    return (
        <div className="container">
            <Users />
            <Posts />
            <Comments />
        </div>
    );
};