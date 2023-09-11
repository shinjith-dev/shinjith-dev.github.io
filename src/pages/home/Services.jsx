import React, { useEffect, useRef } from "react";
import { FaRegLightbulb, FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineBug } from "react-icons/ai";

const content = [
  {
    icon: <FaRegLightbulb />,
    title: "Planning & Analysis",
    description:
      "We'll understand your goals, research the market, and create a project plan for your website or app.",
  },
  {
    icon: <MdOutlineDesignServices />,
    title: "Design & Prototyping",
    description:
      "Our designers will create a user-friendly, visually appealing interface with previews for your review.",
  },
  {
    icon: <FaCode />,
    title: "Development & Coding",
    description:
      "Our developers will build your site using top-notch technologies for functionality & performance.",
  },
  {
    icon: <AiOutlineBug />,
    title: "Testing & Deployment",
    description:
      "We ensure your project works flawlessly through rigorous testing and deploy it to the web for users.",
  },
];

function Card({ card }) {
  return (
    <div
      style={{ backdropFilter: "blur(16px) saturate(180%)" }}
      className="border shadow-sm border-light/40 dark:border-dark-950/40 rounded-lg p-3 sm:p-5 h-[min(85vw,210px)] pt-8 flex flex-col gap-1 justify-end from-[#95b3ac]/10 dark:from-dark-900/75 to-[#fff]/25 dark:to-dark-900/25 bg-light-lighter/25 dark:bg-dark-900/25 bg-gradient-to-tr transition-all"
    >
      <div className="text-lg sm:text-xl md:text-2xl mb-2 text-light-darkest dark:text-dark-200 transition-all">
        {card.icon}
      </div>

      <div className="text-sm sm:text-base md:text-lg font-medium text-light-darkest dark:text-dark-200 transition-all">
        {card.title}
      </div>
      <div className="text-xs sm:text-sm text-light-darker dark:text-dark-400 transition-all">
        {card.description}
      </div>
    </div>
  );
}

function Services({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "Services";

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
      id="services"
      ref={sectionRef}
      className="w-full min-h-[80vh] flex flex-col justify-center items-center relative md:pt-28"
    >
      <div className="max-w-7xl">
        <div className="text-2xl md:text-3xl my-2 text-light-darkest font-semibold text-gradient-light dark:text-gradient-dark w-full transition-all">
          What I do
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {content.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>

      <div className="text-6xl sm:text-7xl md:text-9xl font-bold text-center tracking-widest text-light/10 dark:text-dark-900 absolute left-0 top-[85%] z-0 transition-all">
        SERVICES
      </div>
    </section>
  );
}

export default Services;
