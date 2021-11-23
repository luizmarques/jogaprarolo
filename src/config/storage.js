const keyStorage = "@jogaprarolo";

export const saveToken = (token) => localStorage.setItem(keyStorage, token);

export const getToken = () => localStorage.getItem(keyStorage);

export const removeToken = () => localStorage.removeItem(keyStorage);

export const cleanToken = () => localStorage.clear();

const hasToken = () => getToken() !== null;

export const isAuthenticated = () => hasToken();