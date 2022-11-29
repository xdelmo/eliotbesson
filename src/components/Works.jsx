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
  const placeholderText = [{ type: "heading2", text: "Selected" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <div id="works" className="bg-primary rounded-t-3xl">
      <div className="flex flex-col items-center justify-center min-h-screen text-white rounded-t-3xl wrapper">
        {/* MOBILE VIEW */}
        <div className="sm:hidden">
          <h2 className="overflow-hidden tracking-wide text-center uppercase work font-bebas">
            <AnimatedTitle text="Selected Works" />
          </h2>
          <p className="flex items-center justify-center font-ppmori">
            <AnimatedTextWord text="2020 ───── 2022" />
            {/* 2020 <span className="line"></span>
            2022 */}
          </p>
        </div>
        {/* DESKTOP VIEW */}
        <div className="hidden w-full text-white sm:block">
          <div className="flex flex-col justify-between w-full">
            <h2 className="flex self-start uppercase letter-spacing-xs text-[11rem] font-bebas">
              Selected
            </h2>

            <div className="flex items-end justify-between w-full ">
              <div className="pb-24">
                <AnimatedTextWord text="2020 ────────── 2022" />
              </div>
              <h2 className="uppercase font-bebas letter-spacing-xs text-[11rem]">
                {" "}
                Works
              </h2>
            </div>
          </div>
        </div>
      </div>

      {worksInfo.map((workInfo) => (
        <Work
          key={workInfo.id}
          id={workInfo.id}
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
