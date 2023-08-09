import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cover from "./Cover";
import About from "./About";
import Navigation from "../../components/home/Navigation";
import stringFns from "../../utils/stringFns";
import Social from "../../components/home/Social";
import Experiences from "./Experiences";
import Services from "./Services";
import Projects from "./Projects";

function Home() {
  const [activeSection, setSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= window.innerHeight / 2) {
        setSection(null);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const { hash } = location;
    const section = stringFns.toSentenceCase(hash.substring(1));
    setSection(section);
  }, []);

  return (
    <div className="w-screen h-full overflow-x-hidden bg-light-lightest">
      <div className="container relative min-h-screen mx-auto">
        <Navigation active={activeSection} />
        <Social />
        <Cover />
        <About makeActive={(page) => setSection(page)} />
        <Services makeActive={(page) => setSection(page)} />
        <Experiences makeActive={(page) => setSection(page)} />
        <Projects makeActive={(page) => setSection(page)} />
      </div>
    </div>
  );
}

export default Home;
