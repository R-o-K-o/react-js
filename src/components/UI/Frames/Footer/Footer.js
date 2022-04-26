import classes from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.wrap}>
                <p className={classes.text}>JSONPlaceholder</p>
            </div>
        </footer>
    );
};