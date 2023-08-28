import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useLoader from "../hooks/useLoader";
import useDarkMode from "../hooks/useDarkMode";

function Loader({ pageLoaded }) {
  const [progress, setProgress] = useState(0);
  const { loaded, isLoading } = useLoader();
  const [loading, setLoading] = useState(true);
  useDarkMode();

  const min = (a, b) => (a < b ? a : b);

  useEffect(() => {
    if (loaded && progress > 120 && loading) {
      setLoading(false);
      setTimeout(() => {
        pageLoaded();
      }, 800);
    }
  }, [loaded, progress]);

  useEffect(() => {
    let intervalId = null;
    if (!intervalId) {
      intervalId = setInterval(() => {
        setProgress((prev) => (prev === 0 ? 15 : prev + min(prev / 3, 15)));
      }, 200);
    }

    return () => clearInterval(intervalId);
  }, [isLoading]);

  return (
    <div
      className={`h-screen w-screen overflow-hidden  flex items-center justify-center transition-all ${
        loading ? "bg-[#fff] dark:bg-dark-950" : "transparent"
      }`}
      style={{
        transition: "all 0.5s cubic-bezier(0.57, 0.21, 0.69, 1.25)",
      }}
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        style={{
          transform: `scale(${loading ? 1 : 0})`,
          opacity: loading ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.57, 0.21, 0.69, 1.25)",
        }}
      >
        <CircularProgressbarWithChildren
          value={progress}
          styles={{
            path: {
              stroke: "#ee6c4d",
              strokeLinecap: "round",
              transition:
                "stroke-dashoffset 0.2s cubic-bezier(0.57, 0.21, 0.69, 1.25) 0s",
              transform: "rotate(0turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "#fbb6a6",
              strokeLinecap: "round",
              transform: "rotate(0.5turn)",
              transformOrigin: "center center",
            },
          }}
        >
          <div
            className="text-4xl sm:text-5xl md:text-6xl text-brand font-bold transition-all duration-500"
            style={{
              opacity: progress > 70 ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.57, 0.21, 0.69, 1.25)",
              transitionDelay: "0s",
            }}
          >
            S
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default Loader;
