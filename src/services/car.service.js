import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const carService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create: (car) => axiosService.post(urls.cars, car),
    updateBuId: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
};