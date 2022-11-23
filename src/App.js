import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Works />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
