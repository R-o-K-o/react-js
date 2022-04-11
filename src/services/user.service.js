import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService(`${urls.users}/${id}`),
};