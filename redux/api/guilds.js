import axios from "../index";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const guildAPI = {
    // register guild api
    registerGuildApi(data) {
        return axios.post(`/guild/signup`, data, config);
    },
    getGuildAvatarApi() {
        return axios.get(`/guild/guild-avatar`, config);
    },
};

export default guildAPI;