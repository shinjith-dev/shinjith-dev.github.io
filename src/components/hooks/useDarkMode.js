import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("system-dark");

  const setSystem = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setMode("system-dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("system-light");
    }
    localStorage.setItem("theme", "system");
  };

  const setDark = () => {
    document.documentElement.classList.add("dark");
    setMode("dark");
    localStorage.setItem("theme", "dark");
  };

  const setLight = () => {
    document.documentElement.classList.remove("dark");
    setMode("light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    if (localStorage.theme === "dark") setDark();
    else if (localStorage.theme === "light") setLight();
    else setSystem();
  }, []);

  const change = (isDark) => {
    if (isDark === "system") setSystem();
    else if (isDark === "light") setLight();
    else setDark();
  };

  const colorMode = mode.includes("system") ? mode.split("-")[1] : mode;
  const type = mode.includes("system") ? "system" : "manual";

  return { mode: colorMode, type, change };
};

export default useDarkMode;
