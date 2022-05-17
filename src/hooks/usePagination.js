import {useSearchParams} from "react-router-dom";

export const usePagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const prevPage = () => {
        const prev = +query.get('page') - 1;
        setQuery({page: `${prev}`});
    };

    const nextPage = () => {
        const next = +query.get('page') + 1;
        setQuery({page: `${next}`});
    };

    return [query, prevPage, nextPage];
};