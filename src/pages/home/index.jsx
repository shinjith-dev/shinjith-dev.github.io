import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cover from "./Cover";
import About from "./About";
import Navigation from "../../components/home/Navigation";
import stringFns from "../../utils/stringFns";
import Social from "../../components/home/Social";

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
    <div className="max-w-[1500px] relative min-h-screen mx-auto">
      <Navigation active={activeSection} />
      <Social />
      <Cover />
      <About makeActive={(page) => setSection(page)} />
    </div>
  );
}

export default Home;
