import React from "react";
import { PiGithubLogoFill, PiLink } from "react-icons/pi";
import { motion } from "framer-motion";

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.3 + index * 0.2, type: "tween" }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="overflow-hidden rounded-3xl group-hover:shadow-spread-sm transition-all">
        <a
          href={project?.live_url ? project.live_url : project?.github_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={project?.thumb_url}
            alt={project?.name}
            className="h-36 rounded-3xl transition-all duration-300 object-cover object-center w-full saturate-50 group-hover:saturate-100 opacity-90 group-hover:opacity-100"
          />
        </a>

        <div className="px-4 py-3 bg-light dark:bg-dark-900 rounded-3xl z-10 relative -mt-10">
          <div className="md:text-lg font-medium text-light-lightest dark:text-dark-50 transition-all">
            {project?.name}
          </div>
          <div className="flex gap-2 text-xs text-light-light dark:text-dark-400 flex-wrap transition-all">
            {project.technologies.map((tech) => (
              <div>{tech}</div>
            ))}
          </div>

          <div className="text-xs md:text-sm text-light-lighter dark:text-dark-300 transition-all my-2">
            {project.description.map((desc, index) => (
              <>
                <p>{desc}</p>
                {index !== project.description.length - 1 && <br />}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 flex-wrap text-xl py-1 my-1 px-1">
        {project?.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-light-darkest text-light-dark dark:hover:text-dark-500 dark:text-dark-700 transition-all"
          >
            <PiLink />
          </a>
        )}
        {project?.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-light-darkest text-light-dark dark:hover:text-dark-500 dark:text-dark-700 transition-all"
          >
            <PiGithubLogoFill />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
