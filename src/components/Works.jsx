import React from "react";
import { worksInfo } from "../constants";
import Work from "./Work";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

function Works() {
  // Variants for framer motion animation menu
  const timelineVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        // when: "beforeChildren",
        staggerChildren: 1,
      },
    },

    //! EXIT ANIMATION DOES NOT WORK
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <div id="works" className="bg-primary rounded-t-3xl">
      <div className="flex flex-col items-center justify-center min-h-screen text-white rounded-t-3xl wrapper">
        <h2 className="text-center uppercase work font-bebas">
          <AnimatedTitle text="Selected Works" />
        </h2>
        <p className="flex items-center justify-center font-ppmori">
          <AnimatedTextWord text="2020 ───── 2022" />
          {/* 2020 <span className="line"></span>
          2022 */}
        </p>
      </div>

      {worksInfo.map((workInfo) => (
        <Work
          key={workInfo.id}
          name={workInfo.name}
          bgColor={workInfo.bgColor}
          img={workInfo.img}
          tags={workInfo.tags}
          link={workInfo.link}
        />
      ))}
    </div>
  );
}

export default Works;
