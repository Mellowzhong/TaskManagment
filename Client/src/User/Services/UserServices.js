import { axiosUser } from '../../utilities/Route'

export const getUserByEmail = async (email, userPassword) => {
    try {
        const response = await axiosUser.get(`${email}/`, {
            params: { password: userPassword }
        });
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const createUser = async (data, email) => {
    try {
        const response = await axiosUser.post(`${email}/`, data);
        return response.status === 201 ? response.data : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}