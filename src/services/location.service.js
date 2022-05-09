import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const locationService = {
    getAll: () => axiosService.get(urls.location),
};