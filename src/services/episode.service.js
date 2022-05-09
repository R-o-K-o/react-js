import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const episodeService = {
    getAll: () => axiosService.get(urls.episode),
};