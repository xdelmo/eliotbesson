import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "./components/AnimatedTitle";
import Cookies from "./components/Cookies";
// import Footer2 from "./components/Footer2";
// import Footer3 from "./components/Footer3";

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
    exit: {
      opacity: 1,
      y: "-100vh",
      transition: {
        duration: 0.5,
      },
    },
  };

  const [cookiesBanner, setCookiesBanner] = React.useState(true);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            className="h-screen bg-primary z-99 font-ppmori"
            variants={loadingVariants}
            initial="show"
            exit="exit"
            // stessa chiave su i due div nell'operatore ternario per non accavallare le due animazioni
            key={`${isLoading}`}
          >
            <div className="flex flex-col justify-between h-screen py-4 text-white wrapper">
              <div className="flex flex-row justify-between">
                <p>Eliot </p>
                <p className="uppercase">Besson</p>
              </div>
              <div className="flex items-center justify-center">
                {/* overflow nascosto */}
                <h2 className="overflow-hidden tracking-wide font-bebas hero">
                  <AnimatedTitle text="welcome!" />
                </h2>
              </div>
              <div className="flex flex-row items-end justify-between">
                <p>Digital Designer</p>
                <p>Webflow Expert</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            // stessa chiave su i due div nell'operatore ternario per non accavallare le due animazioni
            key={`${isLoading}`}
          >
            {cookiesBanner && (
              <Cookies
                cookiesBanner={cookiesBanner}
                setCookiesBanner={setCookiesBanner}
              />
            )}
            <Navbar />
            <main className="relative mb-[100vh]">
              <Hero />
              <Works />
              <AboutMe />
            </main>
            <Footer />
            {/* <Footer2 /> */}
            {/* <Footer3 /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
