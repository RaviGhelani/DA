import axios from "../index"; 

const playersAPI = {
  // get all players list api
  getAllPlayersListApi({ page = 1, size = 10, data }) {
    return axios.post(`/api/admin/customers/filterallplayers?page=${page}&size=${size}`, data);
  },

  // get all DA players list api
  getAllDAPlayersListApi({ page = 1, size = 10, data }) {
    return axios.post(`/api/admin/customers/filteralldaplayers?page=${page}&size=${size}`, data);
  },
};

export default playersAPI;
