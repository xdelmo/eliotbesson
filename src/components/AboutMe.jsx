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
        duration: 0.5,
      },
    },
  };

  return (
    <div className="Aboutme min-h-screen p-4 py-20 flex flex-col justify-center items-start text-primary rounded-b-3xl round uppercase container">
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
          Bonjour! <br></br> I’m eliot, independant <br></br> digital designer,
          and <br></br> webflow expert, <br></br>
          living on planet <br></br>
          earth{" "}
          <motion.img
            className="aboutme-img"
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
          i have +5 years of XP. <br /> in designing digital <br /> products,{" "}
          <motion.img
            className="aboutme-img"
            src="/assets/macbook.png"
            alt="macbook"
            variants={imgVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          />
          with A <br /> strong focus on user <br /> interface.
        </p>
      </motion.div>
      <p className="text-primary letter-spacing-xs leading-5 uppercase hover-underline-animation mt-8 up-letters-animation">
        Learn more
      </p>
    </div>
  );
}

export default AboutMe;
