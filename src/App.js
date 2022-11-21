import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import React from "react";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
