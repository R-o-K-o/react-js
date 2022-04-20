import classes from './MyLoader.module.css';

export const MyLoader = () => {
    return (
        <div className={classes.my_loader}>
            <img className={classes.load} src="https://www.svgrepo.com/show/327388/logo-react.svg"
                 alt="react_logo"
            />
        </div>
    );
};