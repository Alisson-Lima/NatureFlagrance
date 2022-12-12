import Axios from "axios";

const api = Axios.create({
    baseURL: "http://localhost:5173/"
})

export default api