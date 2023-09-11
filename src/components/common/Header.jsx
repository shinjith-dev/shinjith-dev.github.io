import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";

function Header() {
  const { change, mode } = useDarkMode();
  const [haveBg, setHaveBg] = useState(window.scrollY > 200);

  useEffect(() => {
    if (window.scrollY > 200) setHaveBg(true);

    const checkPosition = () => {
      if (window.scrollY > 200) setHaveBg(true);
      else setHaveBg(false);
    };
    window.addEventListener("scroll", checkPosition);

    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  const getIcon = () => {
    if (mode === "light")
      return <MdDarkMode className="text-base sm:text-lg text-light-darkest" />;
    return <MdLightMode className={`text-base sm:text-lg text-dark-200`} />;
  };

  const getNextMode = () => {
    if (mode === "light") return "dark";
    return "light";
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
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Link
            to="/"
            className="text-base sm:text-lg md:text-2xl font-semibold text-brand dark:text-brand-light flex items-baseline font-mono transition-all leading-none"
          >
            /shinjith-dev<span className="blink">_</span>
          </Link>
        </motion.div>

        <div className="flex items-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "tween" }}
            className="text-xl mx-2 sm:mx-4"
          >
            <button
              title={`Switch to ${getNextMode()} mode`}
              onClick={() => change(mode === "light")}
              className="rounded-full p-1 sm:p-2 group transition-all hover:shadow-spread-xs"
            >
              {getIcon()}
            </button>
          </motion.div>

          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default Header;
