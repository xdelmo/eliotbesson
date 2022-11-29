import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { motion, useScroll } from "framer-motion";
import { useState, useRef } from "react";
import AnimatedTextWord from "./AnimatedTextWord";

function Work(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 300px, rgba(0,0,0,1) 300px, rgba(0,0,0,1) 300px)`;
  const visibleMask = `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 300px)`;

  // progress counter
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section>
      <div ref={ref} className={`${props.bgColor} font-bebas`}>
        {/* MOBILE VIEW */}
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-white sm:hidden wrapper">
          <div className="flex flex-col items-center justify-center">
            {/* progress counter */}
            <p className="flex items-center justify-center mb-4 overflow-hidden font-ppmori">
              <AnimatedTextWord text={`${props.id}`} />

              <span> ───── 05</span>
            </p>
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

        {/* DESKTOP VIEW */}
        <div className="hidden sm:block">
          <div className="flex flex-col justify-between w-full h-full min-h-screen py-20 text-white wrapper">
            {/* counter */}
            <p className="flex items-center justify-center overflow-hidden font-ppmori">
              <AnimatedTextWord text={`${props.id}`} />
              <span> ───── 05</span>
            </p>

            {/* blocco principale */}
            {/* tags */}

            <div>
              <div>
                {props.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="mb-2 text-xs font-thin leading-5 uppercase font-ppmori letter-spacing-xs"
                  >
                    {`${
                      index !== props.tags.length - 1 ? `${tag} / ` : `${tag}`
                    }`}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <h2 className=" overflow-hidden tracking-wide uppercase letter-spacing-xs font-bebas text-[6rem] self-end">
                  {`${props.name}`}
                </h2>
                {/* image */}
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
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={`./assets/${props.img}.png`}
                      alt={`${props.img} work`}
                      className="cursor-pointer rounded-3xl work-img"
                      onLoad={() => setIsLoaded(true)}
                      onClick={() => window.open(props.link)}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
