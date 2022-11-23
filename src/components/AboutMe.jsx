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
        className="Aboutme  min-h-screen py-20 flex flex-col justify-center items-start text-primary  uppercase wrapper "
      >
        <h3 className="font-ppmori font-thin mb-2 text-xs opacity-50 letter-spacing-xs leading-5 ">
          A little more about me
        </h3>
        <motion.div
          className="flex gap-6 flex-col "
          variants={infosAboutMe}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <p className="font-montserrat work letter-spacing-2xs leading-none uppercase">
            Bonjour! I’m eliot, indepe ndant digital designer, and webflow
            expert, living on planet earth{" "}
            <motion.img
              className="aboutme-img inline-block"
              src="/assets/globe.png"
              alt="globe"
              variants={imgVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            />{" "}
            since 1997.
          </p>
          <p className="font-montserrat work letter-spacing-2xs leading-none uppercase">
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
        <p className="text-primary letter-spacing-xs leading-5 uppercase hover-underline-animation mt-8 up-letters-animation">
          Learn more
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
