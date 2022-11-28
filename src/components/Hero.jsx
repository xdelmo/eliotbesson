import React from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRef, useState, useEffect } from "react";

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

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // console.log(scrollY);

  return (
    <div className="bg-white ">
      <div id="hero" className="min-h-screen wrapper">
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

        {/* DESKTOP VIEW */}
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
          <div>
            <h1 className="font-bold relative -mt-20 flex uppercase text-primary text-[16rem] font-bebas letter-spacing-xs">
              <span className="z-0">Bes</span>
              <motion.img
                src="./assets/hello.png"
                className="h-[100px] absolute w-auto rounded-3xl translate-x-[250%] translate-y-[140%]"
                alt="hello"
                // style={{ translateY: scrollY }}
              />
              <span className="z-[2]">son</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
