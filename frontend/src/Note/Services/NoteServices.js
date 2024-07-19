import api from "../../api";

export const getAllNotes = async () => {
  try {
    const res = await api.get("api/notes/");
    if (res.status === 200) return { success: true, data: res.data };
    else return [];
  } catch (err) {
    console.error(err);
    return { success: false, data: err };
  }
};

export const postNote = async (title, content) => {
  try {
    const res = await api.post("api/notes/", { title, content });
    if (res.status === 201) return { success: true, data: res.data };
    else return { success: false, data: res.data };
  } catch (err) {
    console.error(err);
    return { success: false, data: err };
  }
};

export const putNote = async (id, title, content) => {
  try {
    const res = await api.put(`api/notes/update/${id}/`, { title, content });
    if (res.status === 200) return { success: true, data: res.data };
    else return { success: false, data: res.data };
  } catch (err) {
    console.error(err);
    return { success: false, data: err };
  }
};

export const deleteNote = async (id) => {
  try {
    const res = await api.delete(`api/notes/delete/${id}/`);
    if (res.status === 204) return { success: true, data: res.data };
    else return { success: false, data: res.data };
  } catch (err) {
    console.error(err);
    return { success: false, data: err };
  }
};
