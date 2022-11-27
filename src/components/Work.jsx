import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { motion } from "framer-motion";
import { useState } from "react";

function Work(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 300px, rgba(0,0,0,1) 300px, rgba(0,0,0,1) 300px)`;
  const visibleMask = `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 300px)`;

  return (
    <div className={`${props.bgColor} font-bebas`}>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 text-white wrapper">
        <div className="flex flex-col items-center justify-center">
          {/* <picture className="work-img"> */}
          {/* <source
                type="image/webp"
                srcSet={`./assets/${props.img}.webp`}
                className="object-cover rounded-3xl"
              /> */}

          <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img
              src={`./assets/${props.img}.png`}
              alt={`${props.img} work`}
              className="rounded-3xl work-img"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
          {/* </picture> */}
          <div className="flex flex-col items-center justify-center uppercase">
            <h2 className="mt-8 overflow-hidden tracking-wide text-center uppercase work font-bebas w-min ">
              <AnimatedTitle text={`${props.name}`} />
            </h2>
            {props.tags.map((tag) => (
              <p key={tag} className="font-ppmori">
                {tag}
              </p>
            ))}
            <p className="mt-8 leading-5 text-white uppercase cursor-pointer letter-spacing-xs hover-underline-animation-light up-letters-animation font-ppmori">
              <a href={props.link}>Scroll to explore</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
