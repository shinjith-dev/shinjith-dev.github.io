import axios from "./axios";

const api = {
  allProjects: async () => {
    return axios.get("/projects").then((res) => res.data);
  },
};
export default api;
