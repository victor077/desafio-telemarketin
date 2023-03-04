import axios from "axios"

const api = axios.create({
    baseURL: "https://api.federalconsig.com.br/api/"
})

export default api