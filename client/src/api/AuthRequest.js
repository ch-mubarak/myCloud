import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const register = (data) => API.post("/auth/register", { data });
export const login = (data) => API.post("/auth/login", { data });
export const googleLogin = (googleToken) => API.post("/auth/google", {googleToken});
