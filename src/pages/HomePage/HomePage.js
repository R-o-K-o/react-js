import classes from './HomePage.module.css';

export const HomePage = () => {
    return (
        <div className={classes.home_page}>
            <img className={classes.logo_img} src="https://www.svgrepo.com/show/327388/logo-react.svg"
                 alt="react_logo"
            />
        </div>
    );
};