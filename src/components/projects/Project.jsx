/* eslint-disable no-nested-ternary */
import React from "react";
import { PiGithubLogoFill, PiLink } from "react-icons/pi";

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

function Project({ project, left = true }) {
  return (
    <div
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
        } w-full p-5 sm:p-0 sm:w-[70%] h-fit z-10 relative flex flex-col bg-light/90 sm:bg-[transparent] rounded-2xl`}
      >
        <div className="text-brand-lighter sm:text-brand-dark text-xs md:text-sm">
          Featured
        </div>
        <div className="text-lg sm:text-xl font-medium mb-1 md:mb-2 text-light-lightest sm:text-light-darkest">
          {project.name}
        </div>

        <div className="w-fit h-fit text-light-lighter sm:text-light-lightest sm:hover:bg-light-dark transition-all text-xs sm:text-sm sm:bg-light sm:p-4 md:p-5 rounded sm:hover:shadow-spread-sm">
          {project.description.map((desc, index) => (
            <>
              <p>{desc}</p>
              {index !== project.description.length - 1 && <br />}
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
              className="py-1 px-3 font-mono font-medium rounded-2xl sm:bg-light-lighter border border-light-light text-xs md:text-sm"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          className={`flex justify-end gap-3 flex-wrap text-xl ${
            left ? "flex-row-reverse" : ""
          }`}
        >
          {project?.live_url && (
            <a
              href={project?.live_url}
              target="_blank"
              rel="noreferrer"
              className="sm:hover:text-light-darkest sm:text-light text-light-lighter hover:text-light-lightest"
            >
              <PiLink />
            </a>
          )}
          {project?.github_url && (
            <a
              href={project?.github_url}
              target="_blank"
              rel="noreferrer"
              className="sm:hover:text-light-darkest sm:text-light text-light-lighter hover:text-light-lightest"
            >
              <PiGithubLogoFill />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
