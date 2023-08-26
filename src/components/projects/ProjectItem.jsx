import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";

function ProjectItem({ project, isLast = false }) {
  const date = new Date(project.created_at);
  const dateString = `${String(date.getMonth()).padStart(2, "0")}/${String(
    date.getFullYear()
  ).slice(2)}`;
  return (
    <tr className="dark:hover:bg-dark-900/50">
      <td
        width={20}
        className={`border-dark-900 py-3 text-dark-500 pr-2 ${
          !isLast ? "border-b" : ""
        }`}
      >
        {dateString}
      </td>

      <td
        className={`items-center group gap-2 font-medium border-dark-900 py-3 hidden sm:flex ${
          !isLast ? "border-b" : ""
        }`}
      >
        {project.name}
      </td>

      <td
        className={`items-center group font-medium border-dark-900 py-1 sm:hidden ${
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
        width={20}
        className={`border-dark-900 hidden sm:table-cell py-1 ${
          !isLast ? "border-b" : ""
        }`}
      >
        {project?.live_url ? (
          <a
            href={project?.live_url}
            target="_blank"
            rel="noreferrer"
            className="transition-all group"
          >
            <BiArrowBack className="rotate-[140deg] m-2 -translate-x-[1px] translate-y-[1px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
          </a>
        ) : (
          project?.github_url && (
            <a
              href={project?.github_url}
              target="_blank"
              rel="noreferrer"
              className="transition-all"
            >
              <PiGithubLogoFill className="m-2" />
            </a>
          )
        )}
      </td>
    </tr>
  );
}

export default ProjectItem;
