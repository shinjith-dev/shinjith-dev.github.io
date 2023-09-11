/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef } from "react";
import Experience from "../../components/home/experiences/Experience";
import experienceIllus from "../../assets/illus/experiences.svg";
import { AnimatePresence, motion } from "framer-motion";

function Experiences({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "Experience";

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
      id="experience"
      ref={sectionRef}
      className="w-full min-h-[80vh] flex flex-col items-center justify-start relative pt-40 pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        <div className="items-center justify-center hidden md:flex p-8 pl-16 pt-20">
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "tween" }}
            viewport={{ once: true }}
            src={experienceIllus}
            alt="experience"
            className="w-[60%] max-w-md"
          />
        </div>

        <div>
          <AnimatePresence>
            {[...new Array(1)].map((_, index) => (
              <Experience key={`experience-${index}`} />
            ))}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + 0.1, type: "tween" }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-light-darker hover:text-light-darkest text-end dark:text-dark-500"
          >
            <a
              href="https://res.cloudinary.com/dqts6qgre/image/upload/v1692633804/sdev/resumesdev_s1sz0f.pdf"
              download="resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              download resume
            </a>
          </motion.div>
        </div>
      </div>

      <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-center tracking-widest text-light/10 dark:text-dark-900 absolute left-0 top-[70px] z-0 transition-all">
        EXPERIENCE
      </div>
    </section>
  );
}

export default Experiences;
