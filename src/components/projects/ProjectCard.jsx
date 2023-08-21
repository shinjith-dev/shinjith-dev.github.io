import React from "react";
import { PiGithubLogoFill, PiLink } from "react-icons/pi";

function ProjectCard({ project }) {
  return (
    <div className="group pb-11 hover:pb-0 transition-all duration-300 hover:-translate-y-11">
      <div className="h-fit rounded-xl group-hover:shadow-spread-sm">
        <div className="overflow-hidden rounded-t-xl group-hover:shadow-spread-lg">
          <img
            src={project?.thumb_url}
            alt={project?.name}
            className="h-[100px] group-hover:h-36 transition-all duration-300 object-cover object-center w-full saturate-50 group-hover:saturate-100 opacity-90 group-hover:opacity-100"
          />
        </div>

        <div className="bg-light-dark shadow-spread-sm px-5 pt-3 pb-8 -mt-6 group-hover:-mt-7 group-hover:pb-9 transition-all duration-300 z-10 relative rounded-t-xl">
          <div className="md:text-lg font-medium text-light-lightest">
            {project?.name}
          </div>
          <div className="flex gap-2 text-xs text-light-light flex-wrap">
            {project.technologies.map((tech) => (
              <div>{tech}</div>
            ))}
          </div>
        </div>

        <div className="bg-light px-5 py-4 shadow-spread-xs -mt-6 transition-all duration-300 z-10 relative rounded-xl">
          <div className="text-xs md:text-sm text-light-lightest">
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
            href={project?.live_url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-light-darkest text-light-dark"
          >
            <PiLink />
          </a>
        )}
        {project?.github_url && (
          <a
            href={project?.github_url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-light-darkest text-light-dark"
          >
            <PiGithubLogoFill />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
