import axios from "../index"; 

const playersAPI = {
  // get all players list api
  getAllPlayersListApi({ page = 1, size = 10, data }) {
    return axios.post(`/api/admin/customers/filterallplayers?page=${page}&size=${size}`, data);
  },
};

export default playersAPI;
