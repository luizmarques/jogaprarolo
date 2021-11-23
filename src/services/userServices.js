import http from "../config/http";

export const registerUser = (values) => http.post("/user/register", values);
export const loginUser = (values) => http.post("/user/login", values);

