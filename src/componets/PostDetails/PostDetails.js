import classes from './PostDetails.module.css';

export const PostDetails = ({post: {id, userId, title, body}}) => {
    return (
        <div className={classes.post_details}>
            <h2 className={classes.post_title}>{title}.</h2>
            <div className={classes.post_data}>
                <h3 className={classes.subtitle}>post data</h3>
                <div className={classes.content}>
                    <ul className={classes.hint}>
                        <li>id: </li>
                        <li>userid: </li>
                        <li>body: </li>
                    </ul>
                    <ul className={classes.data}>
                        <li>{id}</li>
                        <li>{userId}</li>
                        <li>{body}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};