import axios from "axios";

const api= axios.create({
    baseURL: 'http//192.168.1.23:5000/'
})

export default api;