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

    //get guild avatar api
    getGuildAvatarApi() {
        return axios.get(`/guild/guild-avatar`, config);
    },

    // get guild list api
    getGuildListApi() {
        return axios.get(`/guild/guild-list`, config);
    },
};

export default guildAPI;