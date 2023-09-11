import React from "react";
import {
  PiDevToLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { motion } from "framer-motion";

function Social() {
  return (
    <div className="fixed right-0 md:right-[calc(50vw-384px)] lg:right-[calc(50vw-512px)] xl:right-[calc(50vw-640px)] 2xl:right-[calc(50vw-768px)] mr-4 bottom-0 z-50 hidden sm:flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2.5 sm:gap-3 text-lg sm:text-xl md:text-2xl text-light-darker dark:text-dark-400 transition-all">
        <motion.a
          initial={{ y: 50, opacity: 0, scale: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "tween" }}
          href="https://github.com/shinjith-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest dark:hover:text-dark-50 transition-all"
        >
          <PiGithubLogo />
        </motion.a>

        <motion.a
          initial={{ y: 50, opacity: 0, scale: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "tween" }}
          href="https://www.instagram.com/shinjith_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest dark:hover:text-dark-50 transition-all"
        >
          <PiInstagramLogo />
        </motion.a>

        <motion.a
          initial={{ y: 50, opacity: 0, scale: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "tween" }}
          href="https://dev.to/shinjithdev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest dark:hover:text-dark-50 transition-all"
        >
          <PiDevToLogo />
        </motion.a>

        <motion.a
          initial={{ y: 50, opacity: 0, scale: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "tween" }}
          href="https://www.linkedin.com/in/shinjithkanhangad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest dark:hover:text-dark-50 transition-all"
        >
          <PiLinkedinLogo />
        </motion.a>

        <motion.a
          initial={{ y: 50, opacity: 0, scale: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "tween" }}
          href="https://twitter.com/ShinjithR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest dark:hover:text-dark-50 transition-all"
        >
          <PiTwitterLogo />
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "5vh" }}
        transition={{ delay: 0.2, type: "tween" }}
        className="w-0.5 rounded-t-md bg-light-darker dark:bg-dark-400"
      />
    </div>
  );
}

export default Social;
