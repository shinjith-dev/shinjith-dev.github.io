import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import run from "../../utils/coverText";

function Cover() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) run(textRef.current);
  }, [textRef.current]);

  return (
    <section className="relative w-full min-h-screen">
      <motion.div
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
        transition={{ delay: 0.2, type: "tween" }}
        viewport={{ once: true }}
        className="absolute flex tracking-widest flex-col w-[min(550px,90vw)] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "tween" }}
          viewport={{ once: true }}
          className="text-[min(20px,6vw)] leading-none text-light-dark dark:text-dark-600 font-medium text-gradient-light dark:text-gradient-dark"
        >
          Hey! I&apos;m
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "tween" }}
          viewport={{ once: true }}
          className="text-[min(60px,11vw)] leading-tight text-brand dark:text-brand/90 font-bold tracking-widest"
        >
          SHINJITH P R
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, type: "tween" }}
          viewport={{ once: true }}
        >
          <div
            className="text-[min(20px,6vw)] inline font-medium text-light text-gradient-light gradient-animation"
            ref={textRef}
          />
          <div className="inline font-medium text-gradient-light gradient-animation">
            <span className="blink">_</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, type: "tween" }}
          className="text-[min(16px,5vw)] text-light dark:text-dark-700 font-medium text-gradient-light dark:text-gradient-dark opacity-90"
        >
          and I design accessible, inclusive digital experiences for the web.
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Cover;
