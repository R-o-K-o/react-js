import classes from './Post.module.css';
import {MyButton} from "../UI";

export const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className={classes.post}>
            <h2 className={classes.post_title}>{title}.</h2>
            <MyButton to={id.toString()} state={post}>details</MyButton>
        </div>
    );
};