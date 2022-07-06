import axios from "axios";

//FIXME@ поменять на process.env.API_URL
axios.defaults.baseURL = "http://localhost:3003";
axios.defaults.headers.common["token"] = window.localStorage.token;

window.axios = axios;

export default axios;
