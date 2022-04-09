import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService(`${urls.posts}/${id}`),
    getCommentsById: (id) => axiosService(`${urls.posts}/${id}/comments`),
};