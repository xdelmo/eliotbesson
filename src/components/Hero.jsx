import React from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  const placeholderText = [{ type: "heading1", text: "Eliot" }];
  const placeholderText2 = [{ type: "heading1", text: "Besson" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const ref = React.useRef(null);
  const { scrollY } = useScroll();

  console.log("🚀 ~ file: Hero.jsx ~ line 22 ~ Hero ~ scrollY", scrollY);
  console.log(typeof scrollY);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

  return (
    <div className="bg-white " ref={ref}>
      <div id="hero" className=" wrapper">
        <div className="sm:hidden">
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
        </div>

        {/* HERO PARAGRAPHS */}
        <div className="sm:hidden">
          <div className="flex flex-col gap-3 leading-5 uppercase text-primary letter-spacing-xs ">
            <p className="">
              i’m an independant digital designer & webflow expert based in
              france
            </p>
            <p className="">focusing on creating purposeful user interfaces*</p>
            <p className="">* with a hint on interactions & animations</p>
          </div>
          <div className="pb-20">
            <p className="mt-8 leading-5 uppercase cursor-pointer text-primary letter-spacing-xs hover-underline-animation up-letters-animation">
              Scroll to explore
            </p>
          </div>{" "}
        </div>

        {/* ____________ */}
        {/* DESKTOP VIEW */}
        {/* ____________ */}
        <div className="hidden sm:block">
          {/* primo blocco */}
          <div className="flex items-center justify-between gap-8">
            <h1 className="font-bold uppercase text-primary text-[16rem] font-bebas letter-spacing-xs">
              Eliot
            </h1>
            <div className="max-w-md">
              <div className="flex flex-col gap-3 leading-5 uppercase text-primary letter-spacing-xs ">
                <p className="">
                  i’m an independant digital designer & webflow expert based in
                  france
                </p>
                <p className="">
                  focusing on creating purposeful user interfaces*
                </p>
                <p className="">* with a hint on interactions & animations</p>
              </div>
              <div className="">
                <p className="mt-8 leading-5 uppercase cursor-pointer text-primary letter-spacing-xs hover-underline-animation up-letters-animation">
                  Scroll to explore
                </p>
              </div>{" "}
            </div>
          </div>

          {/* <div ref={ref}> */}
          <div id="h2-desktop " className="">
            <h1 className="font-bold relative -mt-20 flex uppercase  text-primary text-[16rem] font-bebas letter-spacing-xs">
              <span className="z-0">Bes</span>

              <div className="absolute translate-x-[250%] translate-y-[120%] overflow-hidden ">
                <motion.img
                  id="hello"
                  src="./assets/hello.png"
                  alt="hello"
                  className="h-[100px]  rounded-3xl "
                  style={{ translateY: scrollY }}
                  // style={{ rotate: scrollY, translateY: scrollY }}
                />
              </div>
              <span className="z-[2]">son</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
