import axios from "axios";

export const axiosTask = axios.create({
    baseURL: 'http://localhost:8000/task/'
});

export const axiosUser = axios.create({
    baseURL: 'http://localhost:8000/user/'
});