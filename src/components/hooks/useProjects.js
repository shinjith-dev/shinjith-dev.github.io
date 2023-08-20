import { useEffect, useState } from "react";
import api from "../../utils/api";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .allProjects()
      .then((res) => {
        if (res.success) setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { projects };
};

export default useProjects;
