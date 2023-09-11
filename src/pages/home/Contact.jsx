import React, { useEffect, useRef } from "react";
import { TbMailShare } from "react-icons/tb";
import {
  PiDevToLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { motion } from "framer-motion";

function Contact({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "Contact";

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        if (
          window.scrollY > window.scrollY + top - 400 &&
          window.scrollY < window.scrollY + bottom - 400
        )
          makeActive(thisSection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionRef.current]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full items-center relative md:pt-16 pb-12 sm:pb-16"
    >
      <div className="w-full h-0.5 bg-light-lighter rounded dark:bg-dark-900" />
      <div className="py-40 md:py-52 flex flex-col gap-8 items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "tween" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-light dark:text-gradient-dark text-center"
        >
          Tell me about your
          <br />
          next project
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          viewport={{ once: true }}
          href="mailto:shinjithkanhangad@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm sm:text-base px-5 flex gap-2 items-center py-3 font-medium text-light-lightest bg-light dark:bg-dark-900 dark:text-dark-100 hover:shadow-spread-sm hover:scale-[1.03] hover:bg-light-dark rounded-xl"
        >
          Get In Touch <TbMailShare className="text-base sm:text-lg" />
        </motion.a>

        <div className="flex sm:hidden gap-5 text-xl md:text-2xl text-light-darker dark:text-dark-700 transition-all">
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "tween" }}
            viewport={{ once: true }}
            href="https://github.com/shinjith-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-darkest dark:hover:text-dark-300"
          >
            <PiGithubLogo />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, type: "tween" }}
            viewport={{ once: true }}
            href="https://www.instagram.com/shinjith_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-darkest dark:hover:text-dark-300"
          >
            <PiInstagramLogo />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, type: "tween" }}
            viewport={{ once: true }}
            href="https://dev.to/shinjithdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-darkest dark:hover:text-dark-300"
          >
            <PiDevToLogo />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "tween" }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/shinjithkanhangad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-darkest dark:hover:text-dark-300"
          >
            <PiLinkedinLogo />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, type: "tween" }}
            viewport={{ once: true }}
            href="https://twitter.com/ShinjithR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-darkest dark:hover:text-dark-300"
          >
            <PiTwitterLogo />
          </motion.a>
        </div>
      </div>
      <div className="w-full h-0.5 bg-light-lighter dark:bg-dark-900 rounded transition-all" />

      <div className="text-6xl sm:text-7xl md:text-9xl font-bold text-center tracking-widest text-light/10 dark:text-dark-900/50 absolute left-1/2 top-1/2 z-0 -translate-x-[50%] -translate-y-[50%] transition-all">
        CONTACT
      </div>
    </section>
  );
}

export default Contact;
