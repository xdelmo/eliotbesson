import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

function Hero() {
  const placeholderText = [{ type: "heading1", text: "Eliott" }];
  const placeholderText2 = [{ type: "heading1", text: "Besson" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div className="bg-white ">
      <div id="hero" className="min-h-screen wrapper">
        <h1 className="flex flex-col font-bold uppercase text-primary hero font-bebas letter-spacing-xs">
          {/* Eliot animation */}
          <motion.div initial="hidden" animate="visible" variants={container}>
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
          {/* Besson animation */}
          <motion.div initial="hidden" animate="visible" variants={container}>
            <div className="container -mt-32">
              {placeholderText2.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
        </h1>

        {/* HERO PARAGRAPHS */}
        <div className="">
          <div className="flex flex-col gap-3 leading-5 uppercase text-primary letter-spacing-xs ">
            <p className="">
              i’m an independant digital designer & webflow expert based in
              france
            </p>
            <p className="">focusing on creating purposeful user interfaces*</p>
            <p className="">* with a hint on interactions & animations</p>
          </div>
        </div>

        <div className="pb-20">
          <p className="mt-8 leading-5 uppercase cursor-pointer text-primary letter-spacing-xs hover-underline-animation up-letters-animation">
            Scroll to explore
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
