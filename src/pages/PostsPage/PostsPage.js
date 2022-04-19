import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {postService} from "../../services";

import classes from './PostsPage.module.css';
import {Posts, MyLoader} from "../../componets";

export const PostsPage = () => {
    const [posts, setPosts] = useState(null);
    const [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');

    useEffect(() => {
        postService.getAll(query.get('page')).then(({data}) => setPosts(data));
    }, [query]);

    const nextPage = () => {
        page = +page + 1;
        setQuery({page: page.toString()});
    };

    const prevPage = () => {
        page = +page - 1;
        setQuery({page: page.toString()});
    };

    return (
        <div className={classes.posts_page}>
            {
                posts
                    ? <Posts posts={posts}
                             page={page}
                             nextPage={nextPage}
                             prevPage={prevPage} />
                    : <MyLoader />
            }
        </div>
    );
};