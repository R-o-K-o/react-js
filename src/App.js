import './App.css'
import {SpaceLaunches} from "./components";

export const App = () => {
    return (
        <div className="container">
            <h1 className="title">space launches list</h1>
            <SpaceLaunches />
        </div>
    );
};