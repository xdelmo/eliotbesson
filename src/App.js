import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Works />
        <AboutMe />
      </main>
      {/* Box per lasciare spazio al footer che è fixed alla fine del contenuto pagina */}
      <Box />
      <Footer />
    </div>
  );
}

export default App;
