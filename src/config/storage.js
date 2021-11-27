const keyStorage = "@jogaprarolo";

export const setStorageItem = (key, value) =>
  localStorage.setItem(`${keyStorage + key}`, value);

export const getStorageItem = (key) => localStorage.getItem(`${keyStorage + key}`);

export const removeStorageItem = (key) => localStorage.removeItem(`${keyStorage + key}`);


export const saveToken = (token) => localStorage.setItem(keyStorage, token);

export const getToken = () => localStorage.getItem(keyStorage);

export const removeToken = () => localStorage.removeItem(keyStorage);

export const cleanToken = () => localStorage.clear();

const hasToken = () => getToken() !== null;

export const isAuthenticated = () => hasToken();