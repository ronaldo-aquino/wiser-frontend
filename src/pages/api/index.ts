import axios from "axios";

const api = axios.create({
  baseURL: "https://602e02ac96eaad00176dd078.mockapi.io",
});

export default api;
