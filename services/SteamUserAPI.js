import axios from "axios";

const SteamUserAPI = axios.create({
    baseURL: 'http://steamcommunity.com/',
    
})

export default SteamUserAPI