import axios from "axios";
const api = axios.create({
    baseURL:'http://10.9.60.34:3333'
});
export default api;