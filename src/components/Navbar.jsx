import React from "react";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenu() {
    setIsMenuOpen((prevState) => !prevState);
    console.log(isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  function handleClickLink() {
    setIsMenuOpen((prevState) => !prevState);
    if (isMenuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  // Variants for framer motion animation menu
  const navVariants = {
    hidden: {
      y: "-100vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        stiffness: 50,
        // when: "beforeChildren",
        // staggerChildren: 0.4,
      },
    },

    //! EXIT ANIMATION DOES NOT WORK
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.75,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    // Navbar
    <div className="bg-white">
      {" "}
      <nav className="flex justify-between py-4 font-bold tracking-tighter uppercase text-primary wrapper font-ppmori">
        <a
          href="#"
          id="logo"
          className=" text-primary font-bebas letter-spacing-xs"
        ></a>

        <div id="menuToggle" onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </nav>
      <AnimatePresence>
        {" "}
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-10 w-screen h-screen bg-primary"
            variants={navVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            key="bg"
          >
            <div
              className="fixed top-0 left-0 right-0 z-20 h-screen py-4 text-lg tracking-tighter bg-primary wrapper"
              variants={navVariants}
            >
              <div id="menuToggle" onClick={handleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-auto text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <ul className="flex flex-col justify-center h-full gap-2 text-lightDesaturated">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="flex letter-spacing-xs hover:text-white"
                  >
                    <span className="tracking-wide text-2xs">/{nav.id}</span>
                    <a
                      href={nav.link}
                      className="ml-2 overflow-hidden text-5xl"
                      onClick={handleClickLink}
                    >
                      <AnimatedTitle text={nav.title} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
