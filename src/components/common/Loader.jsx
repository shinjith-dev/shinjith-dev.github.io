import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import axios from "../../utils/axios";
import "react-circular-progressbar/dist/styles.css";

function Loader({ pageLoaded }) {
  const [loaded, setLoaded] = useState({ animation: false, sdev: false });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startServer = async () => {
    await axios
      .get("/", {
        onDownloadProgress: (progressEvent) => {
          const total = progressEvent?.bytes || 1;
          const loadedBytes = progressEvent?.loaded || 0;
          const axiosProgress = Math.ceil(loadedBytes / total) * 100;
          setProgress(axiosProgress);
        },
      })
      .then(() => {
        setLoaded((prev) => ({ ...prev, sdev: true }));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const onAnimated = () =>
      setLoaded((prev) => ({ ...prev, animation: true }));
    const timeoutId = setTimeout(onAnimated, 2000);

    setLoading(true);
    startServer();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (loaded.animation && loaded.sdev) pageLoaded();
  }, [loaded]);

  if (!loaded.animation || loading)
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
                  "stroke-dashoffset 1s cubic-bezier(0.57, 0.21, 0.69, 1.25) 0.1s",
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
              className="text-4xl sm:text-5xl md:text-6xl text-brand font-bold transition-all duration-500"
              style={{
                transform: `scale(${progress > 90 ? 1 : 0})`,
                transitionTimingFunction:
                  "cubic-bezier(0.57, 0.21, 0.69, 1.25)",
                transitionDelay: "0.5s",
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
