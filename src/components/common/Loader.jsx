import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import axios from "../../utils/axios";
import "react-circular-progressbar/dist/styles.css";

function Loader({ pageLoaded }) {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startServer = async () => {
    await axios
      .get("/", {
        onDownloadProgress: (progressEvent) => {
          const total = progressEvent?.bytes || 1;
          const loadedBytes = progressEvent?.loaded || 0;
          const axiosProgress =
            Math.ceil(loadedBytes / total) * (100 - 95) + 95;
          if (progress >= 94) setProgress(axiosProgress);
        },
      })
      .then(() => {
        setLoaded(true);
        if (progress >= 94) setProgress(100);
        setLoading(false);
        localStorage.setItem("loaded", true);
      })
      .catch(() => {
        setLoading(false);
        localStorage.setItem("loaded", false);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("loaded")) {
      setLoading(true);
      startServer();
    } else pageLoaded();
  }, []);

  const min = (a, b) => (a < b ? a : b);

  useEffect(() => {
    console.log(loaded, progress, progress >= 100);
    if (loaded && progress >= 100) pageLoaded();
  }, [loaded, progress]);

  useEffect(() => {
    let intervalId = null;
    if (!intervalId) {
      intervalId = setInterval(() => {
        setProgress((prev) => (prev === 0 ? 15 : prev + min(prev / 3, 15)));
      }, 400);
    }

    if (progress >= 94 && !loading) clearInterval(intervalId);

    return () => clearInterval(intervalId);
  }, [loading]);

  if (!loaded.animation || loading || progress < 100)
    return (
      <div className="h-screen w-screen overflow-hidden bg-dark-950 flex items-center justify-center transition-all">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
          <CircularProgressbarWithChildren
            value={progress}
            styles={{
              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: "#ee6c4d",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Customize transition animation
                transition:
                  "stroke-dashoffset 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25) 0.1s",
                // Rotate the path
                transform: "rotate(0turn)",
                transformOrigin: "center center",
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: "#fbb6a6",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Rotate the trail
                transform: "rotate(0.5turn)",
                transformOrigin: "center center",
              },
            }}
          >
            <div
              className="text-4xl sm:text-5xl md:text-6xl text-brand font-bold transition-all duration-300"
              style={{
                transform: `scale(${progress > 70 ? 1 : 0})`,
                transitionTimingFunction:
                  "cubic-bezier(0.57, 0.21, 0.69, 1.25)",
                transitionDelay: "0s",
              }}
            >
              S
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    );

  return (
    <div className="h-screen w-screen overflow-hidden bg-dark-950 flex items-center justify-center transition-all">
      404
    </div>
  );
}

export default Loader;
