import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <Works />
      </main>
    </div>
  );
}

export default App;
