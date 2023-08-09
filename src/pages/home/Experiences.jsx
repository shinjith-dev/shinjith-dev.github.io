import React, { useEffect, useRef } from "react";
import Experience from "../../components/experiences/Experience";
import experiencesIllus from "../../assets/illus/experiences.svg";

function Experiences({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "Experiences";

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (window.scrollY >= top + 50) makeActive(thisSection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionRef.current]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-screen px-6 flex items-center relative p-5"
    >
      <div className="grid grid-cols-2">
        <div className="flex items-end justify-end p-10 pt-20">
          <img src={experiencesIllus} alt="experiences" className="w-[60%]" />
        </div>
        {[...new Array(1)].map((experience) => (
          <Experience />
        ))}
      </div>

      <div className="text-8xl font-bold text-center tracking-widest text-glass-light-lighter absolute left-0 top-[calc(100vh-200px)] -z-10">
        EXPERIENCES
      </div>
    </section>
  );
}

export default Experiences;
