import axios from "../index";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const playersAPI = {

  // register player
  registerPlayerApi(data) {
    return axios.post(`/auth/signup`, data, config);
  },

  // login player
  playerLoginApi(data) {
    return axios.post(`/auth/login`, data, config);
  },

  // get all players list api
  getAllPlayersListApi({ page = 1, size = 10, data }) {
    return axios.post(`/api/admin/customers/filterallplayers?page=${page}&size=${size}`, data);
  },

  // get all DA players list api
  getAllDAPlayersListApi({ page = 1, size = 10, data }) {
    return axios.post(`/api/admin/customers/filteralldaplayers?page=${page}&size=${size}`, data);
  },

  // get Player Avatar
  getPlayerAvatarApi() {
    return axios.get(`/player/player-avatar`, config);
  },

  // get Player Info
  getPlayerInfoApi(userId) {
    return axios.get(`/player/me/${userId}`, config);
  },
};

export default playersAPI;
