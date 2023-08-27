import axios from "./axios";

const api = {
  start: async () => {
    return axios.get("/").then((res) => res.data);
  },
  allProjects: async () => {
    return axios.get("/projects").then((res) => res.data);
  },
};
export default api;
