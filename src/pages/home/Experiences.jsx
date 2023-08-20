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
      className="w-full min-h-screen px-6 flex items-center relative p-5"
    >
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center p-8 pl-16 pt-20">
          <img
            src={experienceIllus}
            alt="experience"
            className="w-[60%] max-w-md"
          />
        </div>

        {[...new Array(1)].map((_, index) => (
          <Experience key={`experience-${index}`} />
        ))}
      </div>

      <div className="text-8xl font-bold text-center tracking-widest text-lglass-lighter absolute left-0 top-[calc(100vh-150px)] z-0">
        EXPERIENCE
      </div>
    </section>
  );
}

export default Experiences;
