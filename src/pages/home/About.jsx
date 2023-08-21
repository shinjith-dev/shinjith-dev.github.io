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
      className="w-full  min-h-screen flex items-center"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between -mt-80 sm:-mt-40 md:mt-0">
        <img
          src={sdev}
          alt="sdev"
          className="w-[40vw] sm:w-[30vw] md:w-[25vw] max-w-[350px] h-auto max-h-[50vw] sm:max-h-[45vw] md:max-h-[40vw] translate-y-20 sm:translate-y-28 md:translate-y-0 -z-10 object-cover object-center rounded"
        />

        <div className="flex flex-col">
          <div className="text-7xl sm:text-8xl md:text-9xl font-semibold text-center tracking-widest text-lglass-lighter">
            ABOUT
          </div>
          <div className="text-lg sm:text-2xl md:text-3xl -translate-y-12 sm:-translate-y-16 md:-translate-y-20 text-center text-light-dark tracking-widest font-medium">
            <span className="text-brand-dark">HI,</span> I&apos;M SHINJITH
          </div>
          <div className="max-w-[95%] text-sm sm:text-base flex flex-col gap-3 md:gap-4 text-light tracking-wide md:pl-[max(3vw,1rem)]">
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
                className="text-brand"
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
