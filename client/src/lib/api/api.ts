import axios from "axios"; 
import { PUBLIC_API_URL } from "$env/static/public";

export const api = axios.create({
    baseURL: PUBLIC_API_URL + '/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
})