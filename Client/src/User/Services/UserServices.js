import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/user/'
});

export const getUser = async () => {
    try {
        const response = await axiosClient.get('user/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (data) => {
    try {
        const response = await axiosClient.post('user/', data);
        console.log("user creado")
        return response.data;
    } catch (error) {
        console.error(error);
    }
}