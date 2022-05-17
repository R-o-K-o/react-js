import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const locationService = {
    getAll: (page = 1) => axiosService.get(urls.location, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.location}/${id}`),
};