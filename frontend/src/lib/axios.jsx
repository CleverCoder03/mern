import axios from "axios";

const api = axios.create({
    baseURL: "https://mern-dorboard.onrender.com/api"
})

export default api;