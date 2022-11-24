import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
// import { motion } from "framer-motion";
// import AnimatedText from "./components/AnimatedText";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1500]);
  }, []);

  // const placeholderText = [{ type: "paragraph", text: "Welcome!" }];

  // const container = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.025,
  //     },
  //   },
  // };

  return (
    <div className="App">
      {isLoading ? (
        <div className="h-screen bg-primary z-99 font-ppmori">
          <div className="h-full py-4 text-white wrapper ">
            <div className="flex justify-between h-full ">
              {/* 1 colonna */}
              <div className="flex flex-col justify-between">
                <p>Eliot </p>
                <p>Digital Designer</p>
              </div>
              {/* 2 colonna */}
              <div className="flex items-center justify-center">
                <p className="font-bebas hero">Welcome!</p>
                {/* <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="flex items-center justify-center"
              >
                <div className="container">
                  {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                  })}
                </div>
              </motion.div> */}
              </div>
              {/* 3 colonna */}
              <div className="flex flex-col items-end justify-between">
                <p className="uppercase">Besson</p>
                <p>Webflow Expert</p>
              </div>
            </div>
          </div>
        </div>
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
