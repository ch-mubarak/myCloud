import API from "../config/axios";

export const uploadFile = (file) => API.post("/file", { file });
