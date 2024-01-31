import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";

function ProjectItem({ project, isLast = false, index = 0 }) {
  const date = new Date(project.created_at);
  const dateString = `${String(date.getMonth()).padStart(2, "0")}/${String(
    date.getFullYear(),
  ).slice(2)}`;

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10, x: 100 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1, type: "tween" }}
      viewport={{ once: true }}
      className="hover:bg-light-lightest dark:hover:bg-dark-900/50"
    >
      <td
        width={20}
        className={`border-light-lighter dark:border-dark-900 py-3 text-light dark:text-dark-500 align-top pr-4 ${
          !isLast ? "border-b" : ""
        }`}
      >
        {dateString}
      </td>

      <td
        className={`items-center group gap-2 font-medium border-light-lighter dark:border-dark-900 py-3 hidden md:table-cell align-top pr-4 ${
          !isLast ? "border-b" : ""
        }`}
      >
        {project.name}
      </td>

      <td
        className={`items-center group font-medium border-light-lighter dark:border-dark-900 py-1 md:hidden align-top pr-4 ${
          !isLast ? "border-b" : ""
        }`}
      >
        <a
          href={project?.live_url || project?.github_url}
          target="_blank"
          rel="noreferrer"
          className="py-2 transition-all flex gap-2"
        >
          {project.name}
          <BiArrowBack className="rotate-[140deg] -translate-x-[1px] group-hover:translate-x-1 group-hover:-translate-y-[2px] translate-y-[1px] transition-all " />
        </a>
      </td>

      <td
        width={300}
        className={`border-light-lighter dark:border-dark-900 py-3 align-top pr-4 hidden sm:table-cell ${
          !isLast ? "border-b" : ""
        }`}
      >
        <div className="flex flex-wrap gap-1.5">
          {project?.technologies.map((tech) => (
            <div
              key={tech}
              className="py-1 px-3 font-mono font-semibold rounded-2xl bg-brand-lighter/25 text-brand dark:bg-brand-lightest/25 dark:text-brand-lightest text-xs md:text-sm"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                webkitBackdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </td>

      <td
        width={210}
        className={`border-light-lighter dark:border-dark-900 text-light dark:text-dark-500 align-top hidden md:table-cell py-1 ${
          !isLast ? "border-b" : ""
        }`}
      >
        {project?.live_url ? (
          <a
            href={project?.live_url}
            target="_blank"
            rel="noreferrer"
            className="transition-all group text-sm flex items-center flex-nowrap "
          >
            <div className="whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
              {project.live_url}
            </div>
            <BiArrowBack className="rotate-[140deg] m-2 -translate-x-[1px] translate-y-[1px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
          </a>
        ) : (
          project?.github_url && (
            <a
              href={project?.github_url}
              target="_blank"
              rel="noreferrer"
              className="transition-all group text-sm flex items-center flex-nowrap "
            >
              <div className="whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
                {project.github_url}
              </div>
              <PiGithubLogoFill className="m-2" />
            </a>
          )
        )}
      </td>
    </motion.tr>
  );
}

export default ProjectItem;
