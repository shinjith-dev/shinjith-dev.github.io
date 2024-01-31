/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { PiGithubLogoFill, PiLink } from "react-icons/pi";
import { motion } from "framer-motion";

function ImageLink({ project, children }) {
  if (project?.live_url)
    return (
      <a href={project?.live_url} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  if (project?.github_url)
    return (
      <a href={project?.github_url} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  return { children };
}

function Project({ project, left = true, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: left ? -100 : 100 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.3 + index * 0.2, type: "tween" }}
      viewport={{ once: true }}
      className={`sm:flex items-center relative ${
        left ? "sm:flex-row-reverse" : "sm:flex-row"
      } group`}
    >
      <ImageLink project={project}>
        <img
          src={project?.thumb_url}
          alt={project?.name}
          className="w-[90%] hidden sm:block rounded max-w-2xl saturate-50 group-hover:saturate-100 object-cover opacity-90 group-hover:opacity-100 transition-all hover:shadow-spread-sm"
        />
      </ImageLink>

      <div
        className="sm:hidden absolute top-0 left-0 right-0 bottom-0 bg-center bg-cover rounded-2xl"
        style={{ backgroundImage: `url(${project?.thumb_url})` }}
      />
      <div
        className={`${
          left ? "sm:-mr-28 text-start" : "sm:-ml-28 text-end"
        } w-full p-5 sm:p-0 sm:w-[70%] h-fit z-10 relative flex flex-col bg-light/90 dark:bg-dark-900/90 sm:bg-[transparent] dark:sm:bg-[transparent] rounded-2xl transition-all`}
      >
        <div className="text-brand-lighter sm:text-brand-dark text-xs md:text-sm dark:text-brand-lighter transition-all">
          Featured
        </div>
        <div className="text-lg sm:text-xl font-medium mb-1 md:mb-2 text-light-lightest sm:text-light-darkest dark:text-dark-50 transition-all">
          {project.name}
        </div>

        <div className="w-fit h-fit text-light-lighter dark:text-dark-300 sm:text-light-lightest dark:sm:text-dark-200 sm:hover:bg-light-dark transition-all text-xs sm:text-sm sm:bg-light sm:p-4 md:p-5 rounded sm:hover:shadow-spread-sm dark:sm:bg-dark-900 dark:sm:hover:bg-dark-900">
          {project.description.map((desc, ind) => (
            <>
              <p>{desc}</p>
              {ind !== project.description.length - 1 && <br />}
            </>
          ))}
        </div>
        <div
          className={`flex gap-1.5 md:gap-2 flex-wrap text-sm text-light-light sm:text-light-darkest py-2 md:py-3 ${
            left ? "justify-start" : "justify-end"
          }`}
        >
          {project?.technologies.map((tech) => (
            <div
              key={tech}
              className="py-1 px-3 font-mono font-medium rounded-2xl sm:bg-light/10 transition-all dark:sm:bg-dark-900/10 border border-light-light dark:border-dark-600 dark:sm:border-dark-900 dark:text-dark-300 text-xs md:text-sm"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                webkitBackdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          className={`flex justify-end gap-2 sm:gap-3 flex-wrap text-base sm:text-xl ${
            left ? "flex-row-reverse" : ""
          }`}
        >
          {project?.live_url && (
            <a
              href={project?.live_url}
              target="_blank"
              rel="noreferrer"
              className="sm:hover:text-light-darkest sm:text-light text-light-lighter dark:text-dark-300 hover:text-light-lightest transition-all dark:hover:text-dark-50"
            >
              <PiLink />
            </a>
          )}
          {project?.github_url && (
            <a
              href={project?.github_url}
              target="_blank"
              rel="noreferrer"
              className="sm:hover:text-light-darkest sm:text-light text-light-lighter hover:text-light-lightest dark:text-dark-300 dark:hover:text-dark-50 transition-all"
            >
              <PiGithubLogoFill />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
