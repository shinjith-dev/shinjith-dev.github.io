import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import { projects } from "../components/data/projects.json";
import ProjectItem from "../components/projects/ProjectItem";
import useDarkMode from "../components/hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";

function Projects() {
  useDarkMode();

  const sort = (a, b) => new Date(a.created_at) < new Date(b.created_at);

  return (
    <div className="w-screen min-h-screen h-full overflow-x-hidden bg-[#fff] dark:bg-dark-950 transition-all duration-500">
      <div className="container max-w-[1000px] relative mx-auto px-4 sm:px-10 md:px-16 h-full min-h-screen flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, type: "tween" }}
          viewport={{ once: true }}
          className="w-full pt-20"
        >
          <Link
            to="/"
            className="text-sm sm:text-base md:text-xl font-semibold text-brand hover:text-brand-dark dark:text-brand-light dark:hover:text-brand flex items-baseline font-mono transition-all leading-none"
          >
            /shinjith-dev<span className="blink">_</span>
          </Link>
        </motion.div>

        <div className="flex-grow w-full py-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "tween" }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gradient-light dark:text-gradient-dark"
          >
            Projects Archive
          </motion.div>

          <table className="table-auto w-full border-collapse  mt-10">
            <thead className="text-left text-xs sm:text-sm text-light-dark dark:text-dark-400">
              <tr>
                <th className="font-medium py-1">Date</th>
                <th className="font-medium py-1">Project</th>
                <th className="font-medium py-1 hidden sm:table-cell">
                  Built WIth
                </th>
                <th className="font-medium hidden py-1 md:block">Link</th>
              </tr>
            </thead>
            <tbody className="text-left text-sm sm:text-base text-light-darkest dark:text-dark-200">
              <AnimatePresence>
                {projects &&
                  projects
                    .sort(sort)
                    .map((project, index) => (
                      <ProjectItem
                        project={project}
                        isLast={index === projects.length - 1}
                        index={index}
                      />
                    ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
