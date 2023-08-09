import React, { useEffect, useRef } from "react";
import sdev from "../../assets/images/sdev.jpg";

function About({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "About";

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (window.scrollY >= top + 50) makeActive(thisSection);
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
      className="w-full h-screen px-6 flex items-center"
    >
      <div className="flex gap-6 justify-between">
        <img
          src={sdev}
          alt="sdev"
          className="w-[30vw] max-w-[400px] h-auto object-cover object-center"
        />

        <div className="flex flex-col">
          <div className="text-9xl font-bold text-center tracking-widest text-glass-light-darker">
            ABOUT
          </div>
          <div className="text-3xl -translate-y-20 text-center text-light-dark tracking-wider font-medium">
            <span className="text-brand-dark">HI!</span> I&apos;M SHINJITH
          </div>
          <div className="max-w-[95%] flex flex-col gap-4 text-light tracking-wide pl-[max(3vw,1rem)]">
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
