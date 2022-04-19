import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const userService = {
    getAll: (page, _limit = 7) => axiosService.get(urls.users, {
        params: {
            _start: (page - 1) * _limit,
            _limit,
        },
    }),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
};