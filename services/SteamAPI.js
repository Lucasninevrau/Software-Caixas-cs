import axios from "axios";
import {STEAM_API_KEY} from '@env'

const SteamAPI = axios.create({
    baseURL: 'http://api.steampowered.com/',
    headers: {
        Authorization: `Bearer ${STEAM_API_KEY}`
    }
})

export default SteamAPI