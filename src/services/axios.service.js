import axios from "axios";
import {baseURL} from "../constans";

export const axiosService = axios.create({baseURL});