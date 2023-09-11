import React, { useEffect, useRef } from "react";
import sdev from "../../assets/images/sdev.jpg";

function About({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "About";

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
      id="about"
      ref={sectionRef}
      className="w-full min-h-[70vh] flex items-center"
    >
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between -mt-40 md:mt-0">
        <img
          src={sdev}
          alt="sdev"
          className="w-[40vw] sm:w-[30vw] transition-all dark:saturate-50 dark:hover:saturate-100 md:w-[25vw] max-w-[350px] h-auto max-h-[50vw] sm:max-h-[45vw] md:max-h-[40vw] translate-y-20 sm:translate-y-28 md:translate-y-36 lg:translate-y-0 object-cover object-center rounded"
        />

        <div className="flex flex-col">
          <div className="text-7xl z-10 sm:text-8xl md:text-9xl font-semibold text-center tracking-widest text-light/10 transition-all dark:text-dark-500/10">
            ABOUT
          </div>
          <div className="text-lg z-20 sm:text-2xl md:text-3xl -translate-y-12 sm:-translate-y-16 md:-translate-y-20 text-center text-light-dark dark:text-dark-300 tracking-widest font-medium transition-all">
            <span className="text-brand-dark dark:text-brand">HI,</span>{" "}
            I&apos;M SHINJITH
          </div>
          <div className="max-w-[95%] text-sm sm:text-base flex flex-col gap-3 text-light dark:text-dark-500 tracking-wide lg:pl-[max(1vw,10px)] transition-all">
            <p>Passionate. Creative. Explorer. Aspiring software developer.</p>
            <p>
              BTech student at LBS College of Engineering. JNV Kasaragod alumna.
            </p>
            <p>
              Intrigued by design, travel, music, strategy, art, philosophy,
              delicious food, and even conversions pique my interest.
            </p>
            <p>
              seeking to be inspired, to put effort on things that make a
              difference, to envision the improbable, and to be surrounded by
              those who makes me feel myself.
            </p>
            <p>
              Say hi on Instagram{" "}
              <a
                href="https://www.instagram.com/shinjith_/"
                className="text-brand dark:text-brand-light transition-all"
              >
                @shinjith_
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
