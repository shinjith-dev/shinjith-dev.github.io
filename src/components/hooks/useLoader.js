import { useEffect, useState } from "react";
import api from "../../utils/api";

const useLoader = () => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoaded(Boolean(localStorage.getItem("loaded")));
    if (!localStorage.getItem("loaded")) {
      setLoading(true);
      api
        .start()
        .then(() => {
          setLoaded(true);
          localStorage.setItem("loaded", true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoaded(false);
          localStorage.setItem("loaded", false);
          setLoading(false);
        });
    }

    return () => {
      localStorage.removeItem("loaded");
    };
  }, []);

  return { loaded, isLoading: loading };
};

export default useLoader;
