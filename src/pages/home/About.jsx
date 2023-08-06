import React, { useEffect, useRef } from "react";

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
    <section id="about" ref={sectionRef} className="w-screen h-screen">
      index
    </section>
  );
}

export default About;
