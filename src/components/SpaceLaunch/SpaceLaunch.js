import './SpaceLaunch.css';

export const SpaceLaunch = ({launch: {mission_name, launch_year, links: {mission_patch_small}}}) => {
    return (
        <div className="space_launch">
            <h2 className="mission_name">{mission_name}</h2>
            <p className="launch_year">{launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};