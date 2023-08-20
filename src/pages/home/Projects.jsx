import React, { useEffect, useRef } from "react";
import Project from "../../components/projects/Project";
import ProjectCard from "../../components/projects/ProjectCard";
import useProjects from "../../components/hooks/useProjects";

function Projects({ makeActive }) {
  const { projects } = useProjects();
  const sectionRef = useRef(null);
  const thisSection = "Projects";
  console.log(projects);

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
      className="w-full min-h-screen relative p-5 px-20"
    >
      <div className="mt-40 2xl:mt-48 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 w-full h-full gap-20 mb-40">
          {projects &&
            projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Project
                  left={index % 2 === 0}
                  project={project}
                  key={project.id}
                />
              ))}
        </div>

        <div className="text-3xl my-2 text-light-darkest font-semibold text-gradient-light">
          Other Noteworthy Projects
        </div>
        <div className="grid grid-cols-3 w-full h-full gap-x-8 mt-14 mb-2">
          {projects &&
            projects
              .filter((project) => project.highlight)
              .map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
        </div>

        <div className="text-lg text-brand-dark text-center">
          <a href="/projects" className="underline">
            view the archive
          </a>
        </div>
      </div>

      <div className="text-8xl font-bold text-center tracking-widest text-lglass-lighter absolute right-0 top-[50px] z-0">
        PROJECTS
      </div>
    </section>
  );
}

export default Projects;
