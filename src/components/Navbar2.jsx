import React from "react";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

function Navbar2() {
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
    <div>
      {!isMenuOpen ? (
        <nav class=" text-primary font-bold font-ppmori uppercase text-lg tracking-tighter p-4">
          <div className="container flex items-center justify-between ">
            <a href="https://flowbite.com/" class="flex items-center">
              <a
                href="#"
                className=" text-primary font-ppmori letter-spacing-xs flex items-center"
              >
                <span class="self-center text-xl font-semibold  ">EB</span>
              </a>
            </a>
            <button
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg "
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleMenu}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              class="hidden w-full md:block md:w-auto"
              id="navbar-default"
            ></div>
          </div>
        </nav>
      ) : (
        <AnimatePresence>
          <motion.div
            className="bg-primary h-screen text-lg  tracking-tighter p-4  justify-between mx-auto"
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

            <ul className="flex h-full flex-col text-lightDesaturated gap-2 mt-32">
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

export default Navbar2;
