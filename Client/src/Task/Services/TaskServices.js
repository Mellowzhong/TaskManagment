import { axiosTask } from "../../utilities/Route";

export const getTasks = async () => {
    try {
        const response = await axiosTask.get();
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}