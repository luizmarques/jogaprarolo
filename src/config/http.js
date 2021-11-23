import axios from "axios";

const { REACT_APP_SECRET_API: api } = process.env;

const http = axios.create({
  baseURL: api,
});


export default http
