import axios from "axios";

const CsAPI = axios.create({
    baseURL: 'https://bymykel.github.io/CSGO-API/api/',
    params: {
        language: 'pt-BR'
    }
})
// api das caixas
export default CsAPI