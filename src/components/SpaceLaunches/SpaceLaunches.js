import {useEffect, useState} from "react";

import './SpaceLaunches.css';
import {SpaceLaunch} from "../SpaceLaunch/SpaceLaunch";

import {spaceLaunchService} from "../../services";

export const SpaceLaunches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        spaceLaunchService.getAll().then(value => setLaunches(value));
    }, []);

    const filterSpaceLaunchesArr = launches.filter(launch => launch.launch_year !== '2020');

    return (
        <div className="space_launches">
            {filterSpaceLaunchesArr.map(launch => <SpaceLaunch key={launch.mission_name} launch={launch} />)}
        </div>
    );
};