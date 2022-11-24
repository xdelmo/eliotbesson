import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import AnimatedTitle from "./components/AnimatedTitle";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1500]);
  }, []);

  // Variants for framer motion animation menu
  const loadingVariants = {
    show: {
      transition: {
        delay: 1,
      },
    },

    //! EXIT ANIMATION DOES NOT WORK
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="App">
      {isLoading ? (
        <motion.div
          className="h-screen bg-primary z-99 font-ppmori"
          variants={loadingVariants}
          initial="show"
          exit="exit"
        >
          <div className="flex flex-col justify-between h-screen py-4 text-white wrapper">
            <div className="flex flex-row justify-between">
              <p>Eliot </p>
              <p className="uppercase">Besson</p>
            </div>
            <div className="flex items-center justify-center">
              <h2 className="font-bebas hero">
                <AnimatedTitle text="welcome" />
              </h2>
            </div>
            <div className="flex flex-row items-end justify-between">
              <p>Digital Designer</p>
              <p>Webflow Expert</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <div>
          <Navbar />
          <main>
            <Hero />
            <Works />
            <AboutMe />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
