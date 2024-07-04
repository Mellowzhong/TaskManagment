import axios from 'axios';
import { ACCESS_TOKEN } from './constants';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = cookies.get(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;