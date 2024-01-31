import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Project from "../../components/home/projects/Project";
import ProjectCard from "../../components/home/projects/ProjectCard";
import { projects } from "../../data/projects.json";

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

  const sort = (a, b) => new Date(a.created_at) < new Date(b.created_at);

  const featuredCount = projects.filter((project) => project.featured).length;

  const projectsCount = projects.filter((project) => project.highlight).length;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen relative py-5"
    >
      <div className="my-28 md:mb-0 md:mt-40 2xl:mt-48 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 w-full h-full gap-4 sm:gap-10 md:gap-20 mb-10 sm:mb-16 md:mb-40">
          <AnimatePresence>
            {projects &&
              projects
                .filter((project) => project.featured)
                .sort(sort)
                .map((project, index) => (
                  <Project
                    left={index % 2 === 0}
                    project={project}
                    index={index}
                    key={project.id}
                  />
                ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + featuredCount * 0.2, type: "tween" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl my-1 md:my-2 text-light-darkest font-semibold text-gradient-light dark:text-gradient-dark"
        >
          Other Noteworthy Projects
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-full gap-6 md:gap-8 mt-4 mb-1">
          <AnimatePresence>
            {projects &&
              projects
                .filter((project) => project.highlight)
                .sort(sort)
                .map((project, index) => (
                  <ProjectCard
                    project={project}
                    key={project.id}
                    index={index}
                  />
                ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + projectsCount * 0.2, type: "tween" }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-brand-dark text-center dark:text-dark-500"
        >
          <Link to="/projects" className="underline">
            view the archive
          </Link>
        </motion.div>
      </div>

      <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-center tracking-widest text-light/10 dark:text-dark-900 absolute right-0 top-[70px] z-0 transition-all">
        PROJECTS
      </div>
    </section>
  );
}

export default Projects;
