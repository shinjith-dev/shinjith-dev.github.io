import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex text-light-dark dark:text-dark-300 gap-4 leading-none">
      <motion.a
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "tween" }}
        href="https://res.cloudinary.com/dqts6qgre/image/upload/v1694947458/sdev/resume_sdev_awlrfb.pdf"
        download="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-darkest dark:hover:text-dark-50 hover:underline"
      >
        Resume
      </motion.a>

      {/* <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "tween" }}
        // className="hidden sm:block"
      >
        &middot;
      </motion.span> */}

      <motion.a
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "tween" }}
        href="https://notes.shinjith.dev"
        className="hover:text-light-darkest dark:hover:text-dark-50 hover:underline"
      >
        Notes
      </motion.a>

      {/* <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "tween" }}
        // className="hidden sm:block"
      >
        &middot;
      </motion.span> */}

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "tween" }}
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
