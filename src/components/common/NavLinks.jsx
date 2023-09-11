import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex text-light-dark dark:text-dark-300 gap-1 sm:gap-1.5 md:gap-2 leading-none">
      <motion.a
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "tween" }}
        href="https://res.cloudinary.com/dqts6qgre/image/upload/v1692633804/sdev/resumesdev_s1sz0f.pdf"
        download="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-darkest dark:hover:text-dark-50 hover:underline hidden sm:block"
      >
        Resume
      </motion.a>

      <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "tween" }}
        className="hidden sm:block"
      >
        &middot;
      </motion.span>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "tween" }}
      >
        <Link
          to="/projects"
          className="hover:text-light-darkest dark:hover:text-dark-50 hover:underline"
        >
          Projects
        </Link>
      </motion.div>
    </div>
  );
}

export default NavLinks;
