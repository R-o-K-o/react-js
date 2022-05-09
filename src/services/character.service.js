import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const characterService = {
    getAll: (page= 1) => axiosService.get(urls.character, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.character}/${id}`),
    getByCharacterList: (characters) => {
        const ids = characters.map(character => character.split('/').split(-1)).join(',');
        return axiosService.get(`${urls.character}/${ids}`)
    },
};