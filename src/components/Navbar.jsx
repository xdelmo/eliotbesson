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
      {!isMenuOpen ? (
        <nav className="flex text-primary font-bold font-ppmori uppercase text-lg tracking-tighter p-4 justify-between">
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
      ) : (
        <AnimatePresence>
          <motion.div
            className="bg-primary h-screen text-lg  tracking-tighter p-4"
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
        </AnimatePresence>
      )}
    </div>
  );
}

export default Navbar;
