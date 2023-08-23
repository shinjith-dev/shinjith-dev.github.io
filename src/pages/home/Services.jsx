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
      className="border shadow-sm border-light/40 rounded-lg p-5 w-[min(90vw,280px)] h-[min(90vw,300px)] sm:w-[min(40vw,250px)] sm:h-[min(50vw,280px)] lg:w-[min(20vw,220px)] lg:h-[min(25vw,280px)] xl:w-[min(20vw,250px)] xl:h-[min(25vw,280px)] flex flex-col gap-1 justify-end from-[#95b3ac]/10 to-transparent bg-gradient-to-tr"
    >
      <div className="text-2xl mb-2 text-light-darkest">{card.icon}</div>

      <div className="text-lg font-medium text-light-darkest">{card.title}</div>
      <div className="text-sm text-light-darker">{card.description}</div>
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
      className="w-full min-h-screen flex flex-col justify-center items-center relative py-5"
    >
      <div className="max-w-7xl">
        <div className="text-2xl md:text-3xl my-2 text-light-darkest font-semibold text-gradient-light w-full">
          What I do
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4">
          {content.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>

      <div className="text-6xl sm:text-7xl md:text-9xl font-bold text-center tracking-widest text-lglass-lighter absolute left-0 top-[calc(100vh-150px)] z-0">
        SERVICES
      </div>
    </section>
  );
}

export default Services;
