import {baseUrl, urls} from "../constans";

export const spaceLaunchService = {
    getAll: () => fetch(`${baseUrl}${urls.launches}`).then(response => response.json()),
    getById: (id) => fetch(`${baseUrl}${urls.launches}/${id}`).then(response => response.json()),
};