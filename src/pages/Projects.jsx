import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import useProjects from "../components/hooks/useProjects";
import ProjectItem from "../components/projects/ProjectItem";
import useDarkMode from "../components/hooks/useDarkMode";

function Projects() {
  const { projects } = useProjects();
  const { mode } = useDarkMode();

  return (
    <div className="w-screen min-h-screen h-full overflow-x-hidden dark:bg-dark-950 transition-all duration-500">
      <div className="container relative mx-auto px-4 sm:px-10 md:px-16 h-full min-h-screen flex flex-col items-center justify-center">
        <div>
          <a href="/"></a>
        </div>

        <div className="flex-grow py-24 w-full">
          <div className="text-3xl font-semibold text-gradient-light dark:text-gradient-dark">
            Projects Archive
          </div>

          <table className="table-auto text-left text-sm sm:text-base w-full border-collapse dark:text-dark-200 my-2">
            <thead>
              <tr>
                <th className="font-medium py-1">Year</th>
                <th className="font-medium py-1">Project</th>
                <th className="font-medium hidden py-1 sm:block">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects &&
                projects.map((project, index) => (
                  <ProjectItem
                    project={project}
                    isLast={index === projects.length - 1}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
