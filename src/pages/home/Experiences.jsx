/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef } from "react";
import Experience from "../../components/experiences/Experience";
import experienceIllus from "../../assets/illus/experiences.svg";

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
      className="w-full min-h-screen flex flex-col items-center justify-center relative py-0 sm:py-3 md:py-5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="items-center justify-center hidden md:flex p-8 pl-16 pt-20">
          <img
            src={experienceIllus}
            alt="experience"
            className="w-[60%] max-w-md"
          />
        </div>

        <div>
          {[...new Array(1)].map((_, index) => (
            <Experience key={`experience-${index}`} />
          ))}

          <div className="text-sm md:text-base text-light-darker hover:text-light-darkest transition-all text-end dark:text-dark-500">
            <a
              href="https://res.cloudinary.com/dqts6qgre/image/upload/v1692633804/sdev/resumesdev_s1sz0f.pdf"
              download="resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              download resume
            </a>
          </div>
        </div>
      </div>

      <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-center tracking-widest text-light/10 dark:text-dark-900 absolute left-0 top-[calc(100vh-150px)] z-0 transition-all">
        EXPERIENCE
      </div>
    </section>
  );
}

export default Experiences;
