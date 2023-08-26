import React, { useRef, useEffect } from "react";
import Note from "../../components/home/notes/Note";

function Notes({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "Notes";

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        if (
          window.scrollY > window.scrollY + top - 400 &&
          window.scrollY < window.scrollY + bottom - 400
        )
          makeActive(thisSection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionRef.current]);

  return (
    <section
      id="notes"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col justify-center items-center relative py-5"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-full gap-6 sm:gap-12 md:gap-16 mb-6 sm:mb-10 md:mb-10">
          {[...new Array(3)].map((_, index) => (
            <Note key={`note-${index}`} />
          ))}
        </div>

        <div className="md:text-lg text-brand-dark text-center">
          <a href="/notes" className="underline">
            view the archive
          </a>
        </div>
      </div>

      <div className="text-6xl sm:text-7xl md:text-9xl font-bold text-center tracking-widest text-lglass-lighter absolute left-0 top-[calc(100vh-150px)] z-0">
        NOTES
      </div>
    </section>
  );
}

export default Notes;
