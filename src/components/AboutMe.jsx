import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  const infosAboutMe = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white box-shadow-lg rounded-b-3xl drop-shadow-lg">
      <div
        id="aboutme"
        className="flex flex-col items-start justify-center min-h-screen py-20 uppercase Aboutme text-primary wrapper "
      >
        <h3 className="mb-2 text-xs font-thin leading-5 opacity-50 font-ppmori letter-spacing-xs ">
          A little more about me
        </h3>
        <motion.div
          className="flex flex-col gap-6 "
          variants={infosAboutMe}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <p className="leading-none uppercase font-bebas work letter-spacing-xs">
            Bonjour! <br /> I’m eliot, independant digital designer, and webflow
            expert, living on planet earth{" "}
            <motion.img
              className="inline-block aboutme-img"
              src="/assets/globe.png"
              alt="globe"
              variants={imgVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            />{" "}
            since 1997.
          </p>
          <p className="leading-none uppercase font-bebas work letter-spacing-xs">
            i have +5 years of XP. in designing digital products,{" "}
            <motion.img
              className="aboutme-img"
              src="/assets/macbook.png"
              alt="macbook"
              variants={imgVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            />
            with A strong focus on user interface.
          </p>
        </motion.div>
        <p className="mt-8 leading-5 uppercase cursor-pointer text-primary letter-spacing-xs hover-underline-animation up-letters-animation">
          Learn more
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
