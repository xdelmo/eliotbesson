import React from "react";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

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
      opacity: 0,
      y: "-100vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        // when: "beforeChildren",
        // staggerChildren: 0.4,
      },
    },

    //! EXIT ANIMATION DOES NOT WORK
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    // Navbar
    <div>
      {" "}
      <nav className="flex text-primary wrapper font-bold font-ppmori uppercase  tracking-tighter py-4 justify-between">
        <a href="#" className=" text-primary font-ppmori letter-spacing-xs">
          EB
        </a>

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
      {isMenuOpen && (
        <AnimatePresence>
          <motion.div
            className=" bg-primary w-screen fixed top-0 left-0 z-10 right-0 h-screen"
            variants={navVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div
              className="bg-primary fixed top-0 left-0 right-0 z-20 h-screen text-lg tracking-tighter py-4 wrapper"
              variants={navVariants}
              initial="hidden"
              animate="show"
              exit="exit"
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

              <ul className="flex h-full flex-col  text-lightDesaturated gap-2 mt-32">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="letter-spacing-xs flex hover:text-white"
                  >
                    <span className="tracking-wide text-2xs">/{nav.id}</span>
                    <a
                      href={nav.link}
                      className="text-5xl ml-2"
                      onClick={handleClickLink}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default Navbar;
