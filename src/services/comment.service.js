import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const commentService = {
    getAll: () => axiosService.get(urls.comments),
    getById: (id) => axiosService(`${urls.comments}/${id}`),
};