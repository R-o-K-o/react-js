import classes from './Geo.module.css';

export const Geo = ({geo: {lat, lng}}) => {
    return (
        <div className={classes.geo_data}>
            <h3 className={classes.subtitle}>geo data</h3>
            <div className={classes.content}>
                <ul className={classes.hint}>
                    <li>latitude:</li>
                    <li>longitude:</li>
                </ul>
                <ul className={classes.data}>
                    <li>{lat}</li>
                    <li>{lng}</li>
                </ul>
            </div>
        </div>
    );
};