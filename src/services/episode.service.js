import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const episodeService = {
    getAll: (page = 1) => axiosService.get(urls.episode, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.episode}/${id}`),
};