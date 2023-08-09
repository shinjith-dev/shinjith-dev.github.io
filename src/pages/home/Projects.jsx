import React, { useEffect, useRef } from "react";

function Projects({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "Projects";

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
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen px-6 flex items-center relative p-5"
    >
      <div className="text-8xl font-bold text-center tracking-widest text-lglass-lightest absolute left-0 top-[calc(100vh-200px)] z-0">
        PROJECTS
      </div>
    </section>
  );
}

export default Projects;
