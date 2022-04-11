import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const postService = {
    getAll: () => axiosService(urls.posts),
    getById: (id) => axiosService(`${urls.posts}/${id}`),
    getPostsByUserId: (id) => axiosService(`${urls.posts}?userId=${id}`),
};