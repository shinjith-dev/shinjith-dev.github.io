import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Cover from "./Cover";
import About from "./About";
import Navigation from "../../components/home/Navigation";
import stringFns from "../../utils/stringFns";
import Social from "../../components/home/Social";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Services from "./Services";

function Home() {
  const [activeSection, setSection] = useState(null);
  const location = useLocation();
  const containerRef = useRef(null);

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

  function mouseListener(e) {
    const { scrollY } = window;
    containerRef.current.style.setProperty("--x", e.clientX);
    containerRef.current.style.setProperty("--y", e.clientY + scrollY);
  }

  const scrollListener = () => {
    const x = containerRef.current.style.getPropertyValue("--x");
    const y = containerRef.current.style.getPropertyValue("--y");
    const { scrollY } = window;
    containerRef.current.style.setProperty("--x", x);
    containerRef.current.style.setProperty("--y", y + scrollY);
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", mouseListener);
    document.addEventListener("scroll", scrollListener);

    return () => {
      document.removeEventListener("mousemove", mouseListener);
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className="w-screen h-full dark:bg-dark-950 radius-effect"
      ref={containerRef}
    >
      <div className="container relative mx-auto px-4 sm:px-10 md:px-16 z-10">
        <Navigation active={activeSection} />
        <Header />
        <Social />
        <Cover />
        <About makeActive={(page) => setSection(page)} />
        <Experiences makeActive={(page) => setSection(page)} />
        <Projects makeActive={(page) => setSection(page)} />
        {/* <Notes makeActive={(page) => setSection(page)} /> */}
        <Services makeActive={(page) => setSection(page)} />
        <Contact makeActive={(page) => setSection(page)} />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
