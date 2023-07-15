import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://192.168.29.109:8000";

export default axios.create({
  baseURL,
});
