import axios from "axios";
const api = axios.create({
    baseURL:'http://10.9.60.79:3333',
});
export default api;