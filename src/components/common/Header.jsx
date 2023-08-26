import React, { useEffect, useState } from "react";
import { MdDarkMode, MdDevices, MdLightMode } from "react-icons/md";
import NavLinks from "./NavLinks";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const { change, mode, type } = useDarkMode();
  const [haveBg, setHaveBg] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (window.scrollY > 200) setHaveBg(true);
      else setHaveBg(false);
    };
    window.addEventListener("scroll", checkPosition);

    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  const toggleModes = () => {
    if (type === "system") {
      if (mode === "dark") change("light");
      else change("dark");
    } else if (mode === "light") change("dark");
    else change("system");
  };

  const getIcon = () => {
    if (type === "system")
      return (
        <MdLightMode
          className={`text-base sm:text-lg ${
            mode === "dark" ? "text-dark-200" : "text-light-darkest"
          }`}
        />
      );
    if (mode === "light")
      return <MdDarkMode className="text-base sm:text-lg text-light-darkest" />;
    return <MdDevices className="text-base sm:text-lg text-dark-200" />;
  };

  const getNextMode = () => {
    if (type === "system") return "light";
    if (mode === "light") return "dark";
    return "system";
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 w-screen py-4 text-sm z-50  transition-all duration-500 ${
        haveBg
          ? "dark:bg-[rgba(28,35,53,0.75)] bg-[rgba(255,255,255,0.25)]"
          : ""
      }`}
      style={{ backdropFilter: haveBg ? "blur(16px) saturate(180%)" : "none" }}
    >
      <div className="flex items-center justify-between container mx-auto px-4 sm:px-10 md:px-16">
        <div>
          <a
            href="/"
            className="text-base sm:text-lg md:text-2xl font-semibold text-brand dark:text-brand-light flex items-baseline font-mono transition-all leading-none"
          >
            /shinjith-dev<span className="blink">_</span>
          </a>
        </div>

        <div className="flex items-center">
          <div className="text-xl mx-2 sm:mx-4">
            <button
              title={`Switch to ${getNextMode()} mode`}
              onClick={toggleModes}
              className="rounded-full p-1 sm:p-2 group transition-all hover:shadow-spread-xs"
            >
              {getIcon()}
            </button>
          </div>

          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default Header;
