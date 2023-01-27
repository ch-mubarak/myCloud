import API from "../config/axios";

export const uploadFile = (file) => API.post("/files", file);
export const deleteFile = (id) => API.delete(`/files/${id}`);
export const fetchFiles = () => API.get("/files");
