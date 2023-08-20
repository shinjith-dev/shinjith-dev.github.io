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
      className={`flex items-center ${
        left ? "flex-row-reverse" : "flex-row"
      } group`}
    >
      <ImageLink project={project}>
        <img
          src={project?.thumb_url}
          alt={project?.name}
          className="w-[90%] rounded max-w-2xl saturate-50 group-hover:saturate-100 object-cover opacity-90 group-hover:opacity-100 transition-all hover:shadow-spread-sm"
        />
      </ImageLink>

      <div
        className={`${
          left ? "-mr-28 text-start" : "-ml-28 text-end"
        } w-[70%] h-fit z-10 relative flex flex-col`}
      >
        <div className="text-brand-dark text-sm">Featured</div>
        <div className="text-xl font-medium mb-2 text-light-darkest">
          {project.name}
        </div>
        <div className="w-fit h-fit text-light-lightest hover:bg-light-dark transition-all text-sm bg-light p-5 rounded hover:shadow-spread-sm">
          {project.description.map((desc, index) => (
            <>
              <p>{desc}</p>
              {index !== project.description.length - 1 && <br />}
            </>
          ))}
        </div>

        <div
          className={`flex gap-2 flex-wrap text-sm text-light-darkest py-3 ${
            left ? "justify-start" : "justify-end"
          }`}
        >
          {project?.technologies.map((tech) => (
            <div
              key={tech}
              className="py-1 px-3 font-mono font-medium rounded-2xl bg-light-lighter border border-light-light"
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
              className="hover:text-light-darkest text-light"
            >
              <PiLink />
            </a>
          )}
          {project?.github_url && (
            <a
              href={project?.github_url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-light-darkest text-light"
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
