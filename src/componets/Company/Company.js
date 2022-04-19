import classes from './Company.module.css';

export const Company = ({company: {name, catchPhrase, bs}}) => {
    return (
        <div className={classes.company_data}>
            <h3 className={classes.subtitle}>company data</h3>
            <div className={classes.content}>
                <ul className={classes.hint}>
                    <li>name:</li>
                    <li>catch phrase:</li>
                    <li>bs:</li>
                </ul>
                <ul className={classes.data}>
                    <li>{name}</li>
                    <li>{catchPhrase}</li>
                    <li>{bs}</li>
                </ul>
            </div>
        </div>
    );
};