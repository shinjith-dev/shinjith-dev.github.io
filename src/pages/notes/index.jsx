import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import Footer from "../../components/common/Footer";

const markdown = `👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`'h1'\`)
* Has a lot of plugins`;

function Notes() {
  return (
    <div className="w-screen min-h-screen h-full overflow-x-hidden bg-[#fff] dark:bg-dark-950 transition-all duration-500">
      <div className="container max-w-[1200px] relative mx-auto px-4 sm:px-10 md:px-16 h-full min-h-screen flex flex-col items-center justify-center z-10">
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

          <div className="mb-16 text-dark-400 leading-loose prose prevent-tailwind">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Notes;
