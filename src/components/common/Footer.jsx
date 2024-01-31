import React from "react";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full absolute bottom-0 left-0 right-0 items-center h-10 py-8 z-10 flex justify-between text-xs md:text-sm px-4 sm:px-10 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "tween" }}
        viewport={{ once: true }}
        className="text-light-dark dark:text-dark-400"
      >
        &copy; {year} All rights reserved.
      </motion.div>

      <NavLinks />
    </div>
  );
}

export default Footer;
