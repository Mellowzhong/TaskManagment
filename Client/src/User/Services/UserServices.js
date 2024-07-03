import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/user/'
});

export const getUserByEmail = async (email, userPassword) => {
    try {
        console.log("email: ", email, "password: ", userPassword)
        const response = await axiosClient.get(`${email}/`, {
            params: { password: userPassword }
        });
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (data, email) => {
    try {
        const response = await axiosClient.post(`${email}/`, data);
        console.log("user creado")
        return response.data;
    } catch (error) {
        console.error(error);
    }
}