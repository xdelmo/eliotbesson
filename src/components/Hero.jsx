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
    <div id="hero" className="min-h-screen">
      <h1 className="text-primary hero font-montserrat font-bold uppercase wrapper flex  flex-col letter-spacing-xs ">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={container}>
          <div className="container -mt-10">
            {placeholderText2.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>

        {/* <div>Eliot</div>
        <div className="mt-[-.75em]">Besson</div> */}
      </h1>

      <div className="text-primary letter-spacing-xs wrapper leading-5 uppercase flex flex-col gap-3">
        <p className="flex-1">
          i’m an independant digital designer & webflow expert based in france
        </p>
        <p className="flex-1">
          focusing on creating purposeful user interfaces*
        </p>
        <p className="flex-1">* with a hint on interactions & animations</p>
      </div>

      <div className="wrapper">
        <p className="text-primary letter-spacing-xs leading-5 uppercase hover-underline-animation mt-8 up-letters-animation">
          Scroll to explore
        </p>
      </div>
    </div>
  );
}

export default Hero;
