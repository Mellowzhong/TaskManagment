import api from "../../api";

export const getUser = async (userId) => {
  try {
    const response = await api.get(`/api/user/${userId}/`);
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
