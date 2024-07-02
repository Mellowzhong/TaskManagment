import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/user/'
});

export const getUserByEmail = async (email) => {
    try {
        const response = await axiosClient.get('apiV1/'+ email + '/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (data, email) => {
    try {
        const response = await axiosClient.post('apiV1/' + email + '/', data);
        console.log("user creado")
        return response.data;
    } catch (error) {
        console.error(error);
    }
}